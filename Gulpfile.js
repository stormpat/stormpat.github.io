
/**
 * Main tasks for patrikstorm.com. Libraries included:
 *
 * - Gulp
 * - Sass (via node-sass)
 * - Autoprefixer
 * - CoffeeScript
 *
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');

var autoprefix = require('gulp-autoprefixer');
var gutil = require('gulp-util');

var sassSrc = 'assets/sass/';
var sassTarget = 'css/';

var coffeeSrc = 'assets/coffee/';
var coffeeTarget = 'js/';

gulp.task('sass', function () {
    gulp.src(sassSrc + 'cv.scss')
        .pipe(sass(
        {
            outputStyle: 'expanded',
            sourceComments: 'none'
        }))
        .pipe(autoprefix('last 10 version'))
        .pipe(gulp.dest(sassTarget));
});

gulp.task('coffee', function() {
    gulp.src(coffeeSrc + '*.coffee')
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(gulp.dest(coffeeTarget));
});

gulp.task('watch', function() {
    gulp.watch(sassSrc + '/**/*.scss', ['sass']);
    gulp.watch(coffeeSrc + '/**/*.coffee', ['coffee']);
});

gulp.task('default', ['sass', 'coffee', 'watch']);