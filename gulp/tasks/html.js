const replace = require("gulp-replace");
const panini = require("panini");
const webpHtmlNosvg = require('gulp-webp-html-nosvg');
const versionNumber = require('gulp-version-number');

const html = function() {
    panini.refresh();

    return app.gulp.src(app.path.source.html)
        .pipe(app.plugins.plumber({errorHandler: app.plugins.notify.onError("Error: <%= error.message %>")}))
        // Looks for global variables of type {{ variable.key }}
        .pipe(replace(/{{\s*([\w.]+)\s*}}/g, (match) => {
            let variables = /[\w.]+/.exec(match)[0].split(".");
            let currentVariable = variables[0] ?? "";

            for (let i = 1; i < variables.length; i++) {
                currentVariable = global[currentVariable][variables[i]];
            }

            return currentVariable;
        }))
        .pipe(panini({
            root: `${app.path.sourceFolder}/html/`,
            layouts: `${app.path.sourceFolder}/html/layouts/`,
            partials: `${app.path.sourceFolder}/html/partials/`,
        }))
        .pipe(webpHtmlNosvg())
        .pipe(versionNumber({
            "value": "%DT%",
            "append": {
                "key": "_v",
                "cover": 0,
                "to": [
                    "css",
                    "js",
                ],
            },
        }))
        .pipe(app.gulp.dest(app.path.dist.html))
        .pipe(app.plugins.browserSync.stream());
}

module.exports = html;