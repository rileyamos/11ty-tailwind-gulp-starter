const { src, dest, watch, series } = require('gulp');
const postcss = require('gulp-postcss');
var rename = require('gulp-rename');
const atimport = require('postcss-import');
const purgecss = require('@fullhuman/postcss-purgecss');
const tailwindcss = require('tailwindcss');
const precss = require('precss');
const cssnano = require('cssnano');

const STYLESHEETS = {
  all: [
    'src/stylesheets/layouts/*.css',
    'src/stylesheets/components/*.css',
    'src/stylesheets/build.css'
  ],
  src: 'src/stylesheets/build.css',
  dest: 'src/stylesheets/'
};

function cssTask() {
  return src(STYLESHEETS.src)
    .pipe(
      postcss([
        atimport(),
        tailwindcss(),
        ...(process.env.NODE_ENV === 'production'
          ? [
              purgecss({
                content: ['src/**.njk', 'src/_includes/**/*.njk'],
                defaultExtractor: content =>
                  content.match(/[\w-/:]+(?<!:)/g) || []
              })
            ]
          : []),
        precss(),
        cssnano()
      ])
    )
    .pipe(rename('final.min.css'))
    .pipe(dest(STYLESHEETS.dest));
}

function watchTask() {
  watch(STYLESHEETS.all, series(cssTask));
}

exports.build = cssTask;
exports.default = series(cssTask, watchTask);
