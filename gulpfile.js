const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');

const STYLESHEETS = {
  all: 'src/stylesheets/scss/**/*.scss',
  src: 'src/stylesheets/scss/final.scss',
  dest: 'src/stylesheets/'
};

function scssTask() {
  return src(STYLESHEETS.src)
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest(STYLESHEETS.dest));
}

function watchTask() {
  watch([STYLESHEETS.all], series(scssTask));
}

exports.build = scssTask;
exports.default = series(scssTask, watchTask);
