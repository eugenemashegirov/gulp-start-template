const webp = require("gulp-webp");
const imagemin = require("gulp-imagemin");

const images = function() {
    return app.gulp.src(app.path.source.images)
        .pipe(app.plugins.newer(app.path.dist.images))
        .pipe(imagemin())
        .pipe(app.gulp.dest(app.path.dist.images))
        .pipe(webp())
        .pipe(app.gulp.dest(app.path.dist.images))
        .pipe(app.plugins.browserSync.stream());
}

module.exports = images;
