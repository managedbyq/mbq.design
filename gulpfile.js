var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var clean = require('gulp-clean');
var gzip = require('gulp-gzip');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');

//  Duplicate source file structure into build
gulp.task('copy', function(done){
  gulp.src('source/**/*')
    .pipe(gulp.dest('build/'));
  done();
});

// Concatenate css files
gulp.task('concat-css', function(){
  return gulp.src(['build/css/reset.css', 'build/css/site.css'])
    .pipe(concat('site.css'))
    .pipe(gulp.dest('build/css/'));
});

//  Minify stylesheets
gulp.task('minify-css', function(done){
  gulp.src('build/css/site.css')
    .pipe(cssmin())
    .pipe(gulp.dest('build/css/'));
  done();
});

// Gzip stylesheets
gulp.task('compress-css', function(done){
  gulp.src('build/css/site.css')
  	.pipe(gzip())
  	.pipe(gulp.dest('build/css/'));
  done();
});

//  Ignore normalize.css
gulp.task('ignore-css', function(){
  return gulp.src('build/css/reset.css', {read: false})
    .pipe(clean());
});

//  Minify html
gulp.task('minify-html', function(){
  return gulp.src('build/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build/'));
});

//  Gzip html
gulp.task('compress-html', function(done){
  gulp.src('build/**/*.html')
    .pipe(gzip())
    .pipe(gulp.dest('build/'));
  done();
});

//  Minify javascripts
gulp.task('minify-js', function(done){
  gulp.src('build/js/scroll.js')
    .pipe(uglify().on('error', function(e){
        console.log(e);
     }))
    .pipe(gulp.dest('build/js/'));
  done();
});

//  Gzip javascripts
gulp.task('compress-js', function(done){
  gulp.src('build/js/scroll.js')
    .pipe(gzip())
    .pipe(gulp.dest('build/js/'));
  done();
});

//  Compress images
gulp.task('compress-images', function(done){
  gulp.src('build/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images/'));
  done();
});

// Build
gulp.task('build', gulp.series(
  'copy', 'concat-css', 'minify-css', 'compress-css', 'ignore-css', 'minify-html', 'compress-html', 'minify-js', 'compress-js', 'compress-images'
));
