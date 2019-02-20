const { watch, series, src, dest } = require('gulp');
const  babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

const serve = () => {
  browserSync.init({
      server: {
          baseDir: "app"
      }
  });
  watch('app/**').on('change', browserSync.reload);
}

const transpile = () => {
  return src("app/assets/js/*.js")
    .pipe(babel())
    .pipe(dest('build'));
}

const clean = () => {
  return src("app/assets/js/*.js")
    .pipe(uglify())
    .pipe(dest('build'));
}

watch('src/*.html')

module.exports = {
  serve,
  build: series(transpile, clean),
  dev: series(transpile, serve)
}
