var gulp = require('gulp');
var less = require('gulp-less');
var minify = require('gulp-minify-css');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var merge = require('merge-stream');
var watch = require('gulp-watch');
var handlebars = require('gulp-handlebars')
var declare = require('gulp-declare');
var wrap = require('gulp-wrap');

var paths = {
  less: ['css/**/*.less'],
  js: ['js/src/**/*.js'],
  templates: ['templates/**/*.hbs']
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

gulp.task('templates', function() {
  return gulp.src(paths.templates)
    .pipe(handlebars({
      handlebars: require('ember-handlebars')
    }))
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'Ember.TEMPLATES',
      noRedeclare: true, // Avoid duplicate declarations
      processName: function(filePath) {
        var path = require('path');
        filePath = filePath.replace(/\\/g, '/'); //change windows slashes
       
        var n = path.extname(filePath).length;
        var nameNoExt = n === 0 ? filePath : filePath.slice(0, -n); // remove extension
        var name = nameNoExt.split('templates/')[1];

        return name;
      } 
    }))
    .pipe(concat('templates.js')) 
    .pipe(gulp.dest('js/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.less, ['less']);
  gulp.watch(paths.js, ['build-js']);
  gulp.watch(paths.templates, ['templates']);
});

gulp.task('default', ['less', 'build-js', 'templates', 'watch']);
