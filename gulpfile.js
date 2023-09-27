const gulp = require("gulp");

const path = require("./gulp/config/path");
const plugins = require("./gulp/config/plugins");

global.app = {
    name: "Website",
    isDevelopment: true,
    gulp,
    path,
    plugins,
};

const html = require("./gulp/tasks/html");
const scss = require("./gulp/tasks/scss");
const js = require("./gulp/tasks/js");
const images = require("./gulp/tasks/images");
const sprite = require("./gulp/tasks/sprite");
const fonts = require("./gulp/tasks/fonts");
const assets = require("./gulp/tasks/assets");
const web = require("./gulp/tasks/web");
const reset = require("./gulp/tasks/reset");
const archive = require("./gulp/tasks/archive");
const server = require("./gulp/tasks/server");

function watcher() {
    gulp.watch(app.path.watch.html, html);
    gulp.watch(app.path.watch.scss, scss);
    gulp.watch(app.path.watch.js, js);
    gulp.watch(app.path.watch.images, images);
    gulp.watch(app.path.watch.fonts, fonts);
    gulp.watch(app.path.watch.assets, assets);
    gulp.watch(app.path.watch.web, web);
}

const mainTasks = gulp.parallel(html, scss, js, images, sprite, fonts, assets, web);

const development = gulp.series(mainTasks, gulp.parallel(server, watcher));
const build = gulp.series(reset, mainTasks);
const clean = gulp.series(reset);
const archiving = gulp.series(archive);

module.exports.default = development;
module.exports.build = build;
module.exports.clean = clean;
module.exports.archive = archiving;