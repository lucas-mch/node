var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify');
var del = require('del');


var paths = {
  scripts: [
    'src/*.js',
    'src/**/*.js',
    'src/**/**/*.js',
    'src/**/**/**/*.js',
  ],

  images: 'client/img/**/*',
  dist: 'dist'
};


// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
});

// Rerun the task when a file changes
gulp.task('build:js', function () {
  return gulp.src(paths.scripts, { sourcemaps: true })
    .pipe(minify())
    .pipe(gulp.dest(paths.dist))
});

gulp.task('clean', function () {
  return del(['dist']);
});

gulp.task('default', ['clean', ['build:js'], 'watch']);