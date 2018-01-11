var gulp = require('gulp'),
  cleanCSS = require('gulp-clean-css'),
  del = require('del'),
  concat = require('gulp-concat'),
  DEV_ROOT = './static',
  jsRoot = DEV_ROOT + '/js',
  sassRoot = './scss',
  cssRoot = DEV_ROOT + '/css',
  prodRoot = './public',
  allImg = `${DEV_ROOT}/img/**/*.*`,
  exec = require('child_process').exec,
  minifyHTML = require("gulp-minify-html"),
  sleep = require('sleep');
  
let uglify = require('gulp-uglify-es').default;
let sass = require('gulp-sass');

// define tasks here
gulp.task('default', ['sass', 'concat-js', 'concat-css'], function () {
  gulp.watch(sassRoot + '/*.scss', ['sass']);
  gulp.watch([cssRoot + '/*.css', '!' + cssRoot + '/all.css'], ['concat-css']);
  gulp.watch([jsRoot + '/*.js', '!' + jsRoot + '/all.js'], ['concat-js']);
});

gulp.task('concat-js', function () {
  del.sync([jsRoot + '/all.js']);
  return gulp.src([jsRoot + '/jquery.min.js', jsRoot + '/*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest(jsRoot + '/'));
});

gulp.task('sass', function () {
  // del.sync(['./dev/css/creative.css']);
  return gulp.src(sassRoot + '/clean-blog.sass')
    .pipe(sass())
    .pipe(gulp.dest(cssRoot + '/'));
});

gulp.task('sass', function() {
  return gulp.src(sassRoot + '/clean-blog.scss')
    .pipe(sass())
    .pipe(gulp.dest(`${DEV_ROOT}/css`));
});


gulp.task('concat-css', function () {
  del.sync([cssRoot + '/all.css']);
  return gulp.src(cssRoot + '/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest(cssRoot + '/'));
});

gulp.task('minify', function() {
  return gulp.src(prodRoot + '/**/*.html')
    .pipe(minifyHTML({"empty": true}))
    .pipe(gulp.dest(prodRoot));
});;

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
  return gulp.src(allImg)
    .pipe(gulp.dest(prodRoot + '/img'));
});

gulp.task('clean', function () {
  return del.sync([prodRoot]);
});

gulp.task('build', ['deploy']);

gulp.task('deploy', ['clean', 'uglifyjs-deploy', 'uglifycss-deploy'], function () {
  exec('hugo');
  sleep.sleep(2000);
  gulp.start('deploy-img');
  return gulp.start('minify');
});
