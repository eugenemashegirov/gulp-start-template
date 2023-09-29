const zip = require("gulp-zip");

const archive = function() {
    return app.gulp.src(`${app.path.distFolder}/**/*.*`)
        .pipe(zip(`${app.name.split(" ").join("-").toLowerCase()}.zip`))
        .pipe(app.gulp.dest("./"));
}

module.exports = archive;
