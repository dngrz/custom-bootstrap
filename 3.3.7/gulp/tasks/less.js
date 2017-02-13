
var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var paths = require('../util/paths');
var minifyCSS = require('gulp-minify-css');
var cleanCSS = require('gulp-clean-css');

gulp.task('less', function () {
  gulp.src(path.join(paths.less.lessDir, paths.less.mainFile))
    .pipe(less())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(paths.less.dest));
});

