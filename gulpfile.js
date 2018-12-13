// inclusion plugin
var gulp = require('gulp');
var sass = require('gulp-sass');


//Tache pour convertir un .scss en .css
gulp.task('sass', () => {
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(gulp.dest('app/css'))
});


//Observateur
gulp.task('watch', () => {
    gulp.watch('app/scss/**/*.scss', ['sass']);
});