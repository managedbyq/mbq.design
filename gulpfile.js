var gulp = require('gulp');
var concat = require('gulp-concat');
var cleancss = require('gulp-clean-css');
var clean = require('gulp-clean');
var gzip = require('gulp-gzip');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');

// Concatenate css files
gulp.task('concat-css', function(){
  return gulp.src(['source/css/reset.css', 'source/css/site.css'])
    .pipe(concat('site.css'))
    .pipe(gulp.dest('build/css/'));
});

//  Minify stylesheets
gulp.task('minify-css', function(){
  return gulp.src('build/css/site.css')
    .pipe(cleancss())
    .pipe(gulp.dest('build/css/'));
});

// Gzip stylesheets
gulp.task('compress-css', function(){
  return gulp.src('build/css/site.css')
  	.pipe(gzip())
  	.pipe(gulp.dest('build/css/'));
});

//  Minify html
gulp.task('minify-html', function(){
  return gulp.src('source/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build/'));
});

//  Gzip html
gulp.task('compress-html', function(){
  return gulp.src('build/**/*.html')
    .pipe(gzip())
    .pipe(gulp.dest('build/'));
});

//  Minify javascripts
gulp.task('minify-js', function(){
  return gulp.src('source/js/scroll.js')
    .pipe(uglify().on('error', function(e){
        console.log(e);
     }))
    .pipe(gulp.dest('build/js/'));
});

//  Gzip javascripts
gulp.task('compress-js', function(){
  return gulp.src('build/js/scroll.js')
    .pipe(gzip())
    .pipe(gulp.dest('build/js/'));
});

//  Compress images
gulp.task('compress-images', function(){
  return gulp.src('source/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images/'));
});

//  Copy fonts
gulp.task('copy-fonts', function(){
  return gulp.src('source/css/fonts/*')
    .pipe(gulp.dest('build/css/fonts'));
});

// Copy video
gulp.task('copy-video', function(){
  return gulp.src('source/video/*')
    .pipe(gulp.dest('build/video'));
});

// Build
gulp.task('build', gulp.series(
  'concat-css',
  'minify-css',
  'compress-css',
  'minify-html',
  'compress-html',
  'minify-js',
  'compress-js',
  'compress-images',
  'copy-fonts',
  'copy-video'
));
