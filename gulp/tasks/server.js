const server = function() {
    app.plugins.browserSync.init({
        server: {
            baseDir: app.path.distFolder,
        }
    });
}

module.exports = server;
