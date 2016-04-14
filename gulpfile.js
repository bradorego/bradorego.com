var gulp = require('gulp'),
  less = require('gulp-less'),
  // serve = require('gulp-serve'),
  uglify = require('gulp-uglify'),
  cleanCSS = require('gulp-clean-css'),
  del = require('del'),
  concat = require('gulp-concat'),
  devRoot = './static',
  jsRoot = devRoot + '/js',
  lessRoot = devRoot + '/less',
  cssRoot = devRoot + '/css',
  prodRoot = './public';

// define tasks here
gulp.task('default', ['less', 'concat-js', 'concat-css'], function () {
  gulp.watch(lessRoot + '/*.less', ['less']);
  gulp.watch([cssRoot + '/*.css', '!' + cssRoot + '/all.css'], ['concat-css']);
  gulp.watch([jsRoot + '/*.js', '!' + jsRoot + '/all.js'], ['concat-js']);
});

gulp.task('concat-js', function () {
  del.sync([jsRoot + '/all.js']);
  return gulp.src([jsRoot + '/jquery.min.js', jsRoot + '/*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest(jsRoot + '/'));
});

gulp.task('less', function () {
  // del.sync(['./dev/css/creative.css']);
  return gulp.src(lessRoot + '/clean-blog.less')
    .pipe(less())
    .pipe(gulp.dest(cssRoot + '/'));
});

gulp.task('concat-css', function () {
  del.sync([cssRoot + '/all.css']);
  return gulp.src(cssRoot + '/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest(cssRoot + '/'));
});

// gulp.task('serve', serve({
//   root: [devRoot],
//   port: 8010
// }));

// gulp.task('serve-deploy', serve({
//   root: [prodRoot],
//   port: 8011
// }))


gulp.task('uglifyjs-deploy', function () {
  del.sync([prodRoot + '/js']);
  return gulp.src(jsRoot + '/all.js')
    .pipe(uglify())
    .pipe(gulp.dest(jsRoot + '/'));
});

gulp.task('uglifycss-deploy', function () {
  del.sync([prodRoot + '/css']);
  return gulp.src(cssRoot + '/all.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest(cssRoot + '/'));
});
gulp.task('deploy-img', function () {
  del.sync([prodRoot + '/img']);
  return gulp.src(devRoot + '/img/**/*.*')
    .pipe(gulp.dest(prodRoot + '/img'));
});

gulp.task('build', ['uglifyjs-deploy', 'uglifycss-deploy']);

// gulp.task('build', ['less', 'deploy-img', 'uglifyjs-deploy', 'uglifycss-deploy'], function () { /// then copy stuff!
//   del.sync([prodRoot + '/index.html']);
//   del.sync([prodRoot + '/favicon.ico']);
//   gulp.src(devRoot + '/favicon.ico')
//     .pipe(gulp.dest(prodRoot));
//   return gulp.src(devRoot + '/index.html')
//     .pipe(gulp.dest(prodRoot));
// });