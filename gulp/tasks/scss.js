const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const gcmq = require("gulp-group-css-media-queries");
const webpcss = require("gulp-webpcss");
const cssbeautify = require("gulp-cssbeautify");
const cleanCss = require("gulp-clean-css");
const rename = require("gulp-rename");

const scss = function() {
    return app.gulp.src(app.path.source.scss, {sourcemaps: app.isDevelopment})
        .pipe(app.plugins.plumber({errorHandler: app.plugins.notify.onError("Error: <%= error.message %>")}))
        .pipe(sass({outputStyle: "expanded"}))
        .pipe(autoprefixer({cascade: false}))
        .pipe(gcmq())
        .pipe(webpcss())
        .pipe(cssbeautify())
        .pipe(app.plugins.gulpif(app.isDevelopment, app.gulp.dest(app.path.dist.scss)))
        .pipe(cleanCss())
        .pipe(rename({
            suffix: ".min",
            extname: ".css",
        }))
        .pipe(app.gulp.dest(app.path.dist.scss))
        .pipe(app.plugins.browserSync.stream());
}

module.exports = scss;
