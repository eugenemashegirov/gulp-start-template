const assets = function() {
    return app.gulp.src(app.path.source.assets)
        .pipe(app.plugins.newer(app.path.dist.images))
        .pipe(app.gulp.dest(app.path.dist.assets))
        .pipe(app.plugins.browserSync.stream());
}

module.exports = assets;