const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


function style() {
    return gulp.src('./assets/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./assets/css'))
        .pipe(browserSync.stream());

}

function watch() {
    browserSync.init({
        server: {
            baseDir:'./'
        }
    })
    gulp.watch('./assets/scss/**/*.scss',style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./assest/js/**/*.js', style);
}


exports.style = style;
exports.watch = watch;