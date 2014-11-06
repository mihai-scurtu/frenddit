gulp = require('gulp');
less = require('gulp-less');
sourcemaps = require('gulp-sourcemaps');

var paths = {
  less: ['css/**/*.less']
}

gulp.task('less', function() {
  return gulp.src(paths.less)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'));
})

gulp.task('watch', function() {
  return gulp.watch(paths.less, ['less']);
});

gulp.task('default', ['watch', 'less']);
