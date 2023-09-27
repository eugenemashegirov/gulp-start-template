const babel = require("gulp-babel");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

const js = function () {
    return app.gulp.src(app.path.source.js, {sourcemaps: app.isDevelopment})
        .pipe(app.plugins.plumber({errorHandler: app.plugins.notify.onError("Error: <%= error.message %>")}))
        .pipe(concat("script.js"))
        .pipe(babel())
        .pipe(app.plugins.gulpif(app.isDevelopment, app.gulp.dest(app.path.dist.js)))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min",
            extname: ".js",
        }))
        .pipe(app.gulp.dest(app.path.dist.js))
        .pipe(app.plugins.browserSync.stream());
}

module.exports = js;