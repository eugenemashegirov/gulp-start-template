const svgmin = require("gulp-svgmin");
const svgSprite = require("gulp-svg-sprite");

const sprite = function() {
    return app.gulp.src(app.path.source.svg)
        .pipe(svgmin())
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: "../sprite.svg",
                    example: app.isDevelopment
                }
            }
        }))
        .pipe(app.gulp.dest(app.path.dist.images));
}

module.exports = sprite;