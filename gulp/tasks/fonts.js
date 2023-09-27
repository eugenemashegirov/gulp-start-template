const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");

const fonts = function() {
    return app.gulp.src(app.path.source.fonts)
        .pipe(fonter({
            formats: ["ttf", "woff"]
        }))
        .pipe(app.gulp.dest(app.path.dist.fonts))
        .pipe(app.gulp.src(`${app.path.dist.fonts}/*.ttf`))
        .pipe(ttf2woff2())
        .pipe(app.gulp.dest(app.path.dist.fonts))
        .pipe(app.plugins.browserSync.stream());
}

module.exports = fonts;