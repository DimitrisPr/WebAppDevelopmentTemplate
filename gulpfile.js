var SCSS_DEV_PATH = 'dev/css/*.scss',
    CSS_PUBLIC_PATH = 'public/css';
var JS_DEV_PATH = 'dev/js/*.js',
    JS_PUBLIC_PATH = 'public/js';

var gulp = require('gulp');
var watch = require('gulp-watch');
var cssnano = require('gulp-cssnano');
var pump = require('pump');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
// var htmlmin = require('gulp-htmlmin');

//Watch
gulp.task('watch', function () {
    gulp.watch(SCSS_DEV_PATH, gulp.series('styles'));
    gulp.watch(JS_DEV_PATH, gulp.series('scripts'));
});


gulp.task('styles', function() {
    return gulp.src(SCSS_DEV_PATH)
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(gulp.dest(CSS_PUBLIC_PATH));
});

//UglifyJs
gulp.task('scripts', function (cb) {
  pump([
        gulp.src(JS_DEV_PATH),
        uglify(),
        gulp.dest(JS_PUBLIC_PATH)
    ],
    cb
  );
});


gulp.task('default', function() {
    //Do Nothing    
});
