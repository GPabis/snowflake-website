const gulp = require('gulp'),
      gulpCli = require('gulp-cli'),
      gulpSass = require('gulp-sass'),
      gulpConcat = require('gulp-concat'),
      gulpUglify = require('gulp-uglify'),
      imageMin = require('gulp-imagemin'),
      autoprefixer = require('gulp-autoprefixer'),
      cleanCss = require('gulp-clean-css'),
      concatCss = require('gulp-concat-css');

const main = {
  in:{
    scss: 'src/style/scss/*.scss',
    css: 'src/style/css/*.css',
    js: 'src/js/*.js',
    img: 'src/assets/img/*'
  },
  out:{
    scss: 'src/style/css',
    css: 'dist/style',
    js: 'dist/js',
    img: 'dist/assets/img'
  }
}

gulp.task('sass', () =>{
  return gulp.src(main.in.scss)
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(autoprefixer({
          cascade: false
        }))
        .pipe(gulp.dest(main.out.scss))
});

gulp.task('concat', ()=> {
  return gulp.src(main.in.css)
        .pipe(concatCss('styles.min.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest(main.out.css));
})

gulp.task('scripts', () =>{
  return gulp.src(main.in.js)
        .pipe(gulpUglify())
        .pipe(gulpConcat('script.min.js'))
        .pipe(gulp.dest(main.out.js));
})

gulp.task('imgMin', () =>{
  return gulp.src(main.in.img)
        .pipe(imageMin())
        .pipe(gulp.dest(main.out.img))
})

gulp.task('watch', ()=>{
  gulp.watch('src/style/scss/*.scss', gulp.series('sass'));
  gulp.watch('src/style/css/*.css', gulp.series('concat'));
  gulp.watch('src/js/*.js', gulp.series('scripts'));
  gulp.watch('src/assets/img/*', gulp.series('imgMin'))
})

gulp.task('build', gulp.series('sass', 'concat', 'scripts', 'imgMin'));