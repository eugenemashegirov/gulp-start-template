const web = function() {
    return app.gulp.src(app.path.source.web)
        .pipe(app.gulp.dest(app.path.dist.web))
        .pipe(app.plugins.browserSync.stream());
}

module.exports = web;
