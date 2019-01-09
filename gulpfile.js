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
var svgSprite    = require('gulp-svg-sprite');
var plumber      = require('gulp-plumber');
var baseDir      = 'app/images';   // <-- Set to your SVG base directory
var svgGlob      = '**/*.svg';       // <-- Glob to match your SVG files
var outDir       = 'app/svg';     // <-- Main output directory
var config       = {
    "shape": {
        "spacing": {
            "box": "icon"
        }
    },
    "mode": {
        "symbol": {
            "dest": ".",
            "sprite": "sprite_symbol_pictos.svg",
        }
    }
};

gulp.task('svgsprite', function() {
    return gulp.src(svgGlob, {cwd: baseDir})
        .pipe(plumber())
        .pipe(svgSprite(config)).on('error', function(error){ console.log(error); })
        .pipe(gulp.dest(outDir));
});

//Observateur
gulp.task('watch', () => {
    gulp.watch('app/scss/**/*.scss', ['sass']);
});