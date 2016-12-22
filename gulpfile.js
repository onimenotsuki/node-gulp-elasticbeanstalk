var gulp = require('gulp'),
    del = require('del'),
    sass = require('gulp-sass');

// Precompiling assets before deploying application
gulp.task('precompile', function() {
  return gulp.src('./sass/*.scss')
    .pipe(sass({
      // You can check the options in https://github.com/sass/node-sass
      outputStyle: 'compressed',
      // Add to our compiler import all files in 'includePaths' directories
      includePaths: ['./bower_components/bootstrap-sass/assets/stylesheets']
    }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

// Delete all folders generated in precompiling task
gulp.task('clean', function() {
  return del([
    // All 'dist' directory must be removed
    'dist'
  ]);
});
