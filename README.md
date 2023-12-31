[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/banner2-direct.svg)](https://war.ukraine.ua/support-ukraine)
 
 # [Gulp Start Template](https://github.com/eugenemashegirov/gulp-start-template)

[![Build status](https://github.com/eugenemashegirov/gulp-start-template/actions/workflows/build.yml/badge.svg)](https://github.com/eugenemashegirov/gulp-start-template/actions/workflows/build.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Gulp Start Template is a lightweight template to get started with building a website quickly.

Features:

* Convenient breakdown of HTML
* Ready-made website structure built on flexbox
* Ready-made SCSS architecture
* Built-in Normalize.css, Reset.css and breakpoints for media queries
* Built-in Babel compiler
* Minification of CSS, JS and images
* Converting images to WebP
* Creating SVG sprites
* Live reload
* File change tracking
* etc.

**Pay attention!** Don't forget to change the data in `gulpfile.js` before building the production-ready website.

## Getting started

Before you start working with this template, make sure you have:

1. [Node.js & npm](https://nodejs.org)
1. [Gulp CLI](https://gulpjs.com/docs/en/getting-started/quick-start)

```
npm i -g gulp-cli
```
### Installation

* Clone the repository

```
git clone https://github.com/eugenemashegirov/gulp-start-template.git
```

* Switch to the template folder

```
cd gulp-start-template
```

* Install the dependencies
```
npm i
```

* Start coding your website
```
npm run dev
```

### How to use

Below are the commands that are currently present in this template:

1. `npm run dev` or `gulp` — builds the `dist` folder and starts a live server with a watcher

1. `npm run build` or `gulp build` — builds the `dist` folder

1. `npm run clean` or `gulp clean` — deletes the `dist` folder

1. `npm run archive` or `gulp archive` — creates a zip archive for the `dist` folder

### File structure

* `/dist` — output files folder
* `/gulp` — gulp files folder:
    * `/config` — gulp path and plugins folder
    * `/tasks` — gulp tasks folder
* `/source` — source files folder:
    * `/html` — html folder
    * `/scss` — scss folder
    * `/js`   — js folder
    * `/images` — images folder
    * `/fonts` — fonts folder
    * `/assets` — other files folder (audio, video, pdf, etc.)
    * `/web` — web files folder (robots.txt, favicon.ico, .htaccess, etc.)
* `gulpfile.js` — main gulp file
* `.babelrc` — babel config file
* `.browserslistrc` — browserslist file
* `.editorconfig` — code style file
* `.gitignore` — file that specifies which files git should ignore
* `.gitattributes` — file that specifies files attributes for git
* `package.json` — dependencies file
* `package-lock.json` — all dependencies file

## Contributing

If you find bugs or have ideas to improve this template, please open an **issue** or make a **pull request**. Your contribution is very important for the further development.

## License

This code is distributed under the [MIT License](LICENSE).
