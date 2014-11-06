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

gulp.task('build-js', function() {
  return gulp.src(paths.js)
    .pipe(concat('build.js'))
    .pipe(minify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('js'));
});

gulp.task('watch', function() {
  var less = gulp.src(paths.less)
    .pipe(watch(paths.less), 'less');
  var js = gulp.src(paths.js)
    .pipe(watch(paths.js), 'build-js');

  return merge(less, js);
});

gulp.task('default', ['watch', 'less', 'build-js']);
