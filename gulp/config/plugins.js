const clean = require("gulp-clean");
const gulpif = require("gulp-if");
const newer = require("gulp-newer");
const browserSync = require("browser-sync").create();
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

module.exports = {
    clean,
    gulpif,
    newer,
    browserSync,
    plumber,
    notify,
};
