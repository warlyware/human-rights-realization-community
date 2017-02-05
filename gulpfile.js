'use strict';

var gulp = require('gulp');
var config = require('./gulp/config.json');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');

gulp.task('styles', function() {
    return gulp.src(config.paths.src.styles)
        .pipe(sass.sync({includePaths: config.paths.src.styles_imports}).on('error', sass.logError))
        .pipe(concatCss('style.css'))
        .pipe(gulp.dest('build'));
});

gulp.task('copy:html', function() {
  return gulp.src(config.paths.src.html)
    .pipe(gulp.dest('build'));
});

gulp.task('copy:js', function() {
  return gulp.src(config.paths.src.js)
    .pipe(gulp.dest('build'));
});

gulp.task('copy:node_modules', function() {
  return gulp.src(config.paths.node_modules)
    .pipe(gulp.dest('build/node_modules'));
});

gulp.task('watch', function() {
    gulp.watch(config.paths.src.html, ['copy:html']);
    gulp.watch(config.paths.src.js, ['copy:js']);
    gulp.watch(config.paths.src.styles, ['styles']);
});

gulp.task('default', ['styles', 'copy:html', 'copy:js', 'copy:node_modules', 'watch']);
