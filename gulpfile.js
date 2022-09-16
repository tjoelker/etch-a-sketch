const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sass = require('gulp-dart-sass');
const webp = require('gulp-webp');
const browserSync = require('browser-sync').create();

/* compile js */
function script() {
  return gulp.src('./source/js/**/*.js')
    .pipe(babel({
      presets: ['@babel/preset-env'],
    }))
    .pipe(concat('main.js'))
    .pipe(uglify({
      output: {
        beautify: false,
        indent_level: 2,
        quote_style: 1,
      },
    }))
    .pipe(gulp.dest('./build/script'));
};

/* compile scss into css */
function style() {
  return gulp.src('./source/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./build/style'))
    .pipe(browserSync.stream());
};

/* copy html */
function markup() {
  return gulp.src('./source/**/*.html')
    .pipe(gulp.dest('./build'));
};

/* optimize images */
function compress() {
  return gulp.src('./assets/image/**/*')
    .pipe(webp())
    .pipe(gulp.dest('./build/assets/image'));
};

/* synchronize new changes with browser output */
function sync() {
  browserSync.init({
    server: {
      baseDir: './build',
    },
  });
  gulp.watch('./source/js/**/*.js', script).on('change', browserSync.reload);
  gulp.watch('./source/scss/**/*.scss', style).on('change', browserSync.reload);
  gulp.watch('./source/**/*.html', markup).on('change', browserSync.reload);
};

exports.script = script;
exports.style = style;
exports.markup = markup;
exports.compress = compress;
exports.sync = sync;