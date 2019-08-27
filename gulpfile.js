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
gulp.task('minify-css', function(done){
  gulp.src('build/css/site.css')
    .pipe(cleancss())
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

//  Minify html
gulp.task('minify-html', function(){
  return gulp.src('source/**/*.html')
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
  gulp.src('source/js/scroll.js')
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
  gulp.src('source/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images/'));
  done();
});

//  Copy fonts
gulp.task('copy-fonts', function(done){
  gulp.src('source/css/fonts/*')
    .pipe(gulp.dest('build/css/fonts'));
  done();
});

// Copy video
gulp.task('copy-video', function(done){
  gulp.src('source/video/*')
    .pipe(gulp.dest('build/video'));
  done();
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
