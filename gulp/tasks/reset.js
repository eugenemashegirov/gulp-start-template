const reset = function() {
    return app.gulp.src(app.path.reset, {allowEmpty: true, read: false})
        .pipe(app.plugins.clean());
}

module.exports = reset;