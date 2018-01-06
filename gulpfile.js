var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csscomb = require('gulp-csscomb');
//var ejs = require('gulp-ejs');
//var babel = require('gulp-babel');
var browserSync = require('browser-sync').create();


gulp.task('sass', function () {
  return gulp.src([
    '_resouce/**/*.scss'
  ])
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: [
        'last 2 version',
        'Explorer >= 10',
        'iOS >= 8.1',
        'Android >= 4.4'
      ],
      cascade: false
    }))
    .pipe(csscomb())
    .pipe(gulp.dest('html'))
    .pipe(browserSync.stream());
});

//gulp.task('babel', function () {
//    return gulp.src(['_resouce/**/*.js'])
//      .pipe(babel())
//      .pipe(gulp.dest('html'))
//      .pipe(browserSync.stream());
//});

gulp.task('copy', function () {
  return gulp.src([
    '_resouce/**/*',
    '!_resouce/**/*.scss'
  ])
    .pipe(gulp.dest('html'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function () {
  browserSync.init({
    server: {
      baseDir: "html"
    }
  });

  gulp.watch(['_resouce/**/*.scss'], ['sass']);
  gulp.watch([
    '_resouce/**/*',
    '!_resouce/**/*.scss'
    ], ['copy']);
});

gulp.task('default', ['copy', 'sass', 'watch']);
