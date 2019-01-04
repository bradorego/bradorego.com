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
  minifyHTML = require("gulp-minify-html");

let uglify = require('gulp-uglify-es').default;
let sass = require('gulp-sass');

// define tasks here

gulp.task('concat-js', function () {
  del.sync([jsRoot + '/all.js']);
  return gulp.src([jsRoot + '/*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest(jsRoot + '/'));
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
});

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
  return del([prodRoot]);
});

gulp.task('clean-prod', () => {
  return del([`${prodRoot}/.gitignore`, `${prodRoot}/.DS_Store`]);
});

gulp.task('hugo', (done) => {
  exec('hugo');
  done();
});

gulp.task('deploy', gulp.series('clean', 'uglifyjs-deploy', 'uglifycss-deploy', 'hugo', 'deploy-img', 'minify', 'clean-prod'));

gulp.task('build', gulp.series('deploy'));

gulp.task('default', gulp.series('sass', 'concat-js', 'concat-css', function () {
  gulp.watch(sassRoot + '/*.scss').on('change', gulp.series('sass'));
  gulp.watch([cssRoot + '/*.css', '!' + cssRoot + '/all.css']).on('change', gulp.series('concat-css'));
  gulp.watch([jsRoot + '/*.js', '!' + jsRoot + '/all.js']).on('change', gulp.series('concat-js'));
}));



var http = require('http')
var serveStatic = require('serve-static')

// Serve up public/ftp folder
var serve = serveStatic(prodRoot)

gulp.task('serve-prod', () => {
  // Create server
  http.createServer(function onRequest (req, res, next) {
    serve(req, res, next)
  }).listen(1314);
});
