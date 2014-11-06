gulp = require('gulp');
less = require('gulp-less');
minify = require('gulp-minify-css');
concat = require('gulp-concat');
sourcemaps = require('gulp-sourcemaps');
merge = require('merge-stream');
watch = require('gulp-watch');

var paths = {
  less: ['css/**/*.less'],
  js: ['js/src/**/*.js']
}

gulp.task('less', function() {
  return gulp.src(paths.less)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(minify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'));
});

gulp.task('build-js', function(cb) {
  return gulp.src(paths.js)
    .pipe(concat('build.js'))
    // .pipe(minify())
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('js'))
});

gulp.task('watch', function() {
  gulp.watch(paths.less, ['less']);
  gulp.watch(paths.js, ['build-js']);
});

gulp.task('default', ['less', 'build-js', 'watch']);
