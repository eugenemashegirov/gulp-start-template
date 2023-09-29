const path = require("path");

const rootFolder = path.basename(path.resolve());
const sourceFolder = "./source";
const distFolder = "./dist";

module.exports = {
    source: {
        html: `${sourceFolder}/html/*.html`,
        scss: `${sourceFolder}/scss/style.scss`,
        js: `${sourceFolder}/js/*.js`,
        images: `${sourceFolder}/images/**/*.{jpg,jpeg,png,gif,ico,webp}`,
        svg: `${sourceFolder}/images/**/*.svg`,
        fonts: `${sourceFolder}/fonts/**/*.{ttf,otf,eot,woff,woff2,svg}`,
        assets: `${sourceFolder}/assets/**/*.*`,
        web: `${sourceFolder}/web/**/*.*`,
    },
    watch: {
        html: `${sourceFolder}/html/**/*.html`,
        scss: `${sourceFolder}/scss/**/*.scss`,
        js: `${sourceFolder}/js/**/*.js`,
        images: `${sourceFolder}/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        fonts: `${sourceFolder}/fonts/**/*.{ttf,otf,eot,woff,woff2,svg}`,
        assets: `${sourceFolder}/assets/**/*.*`,
        web: `${sourceFolder}/web/**/*.*`,
    },
    dist: {
        html: `${distFolder}/`,
        scss: `${distFolder}/css/`,
        js: `${distFolder}/js/`,
        images: `${distFolder}/images/`,
        fonts: `${distFolder}/fonts/`,
        assets: `${distFolder}/assets/`,
        web: `${distFolder}/`,
    },
    reset: distFolder,
    rootFolder,
    sourceFolder,
    distFolder,
};
