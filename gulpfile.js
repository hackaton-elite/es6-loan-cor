var gulp = require("gulp");
var babel = require("gulp-babel");
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

/*gulp.task('sass', function () {
    gulp.src('./frontend/scss/application.scss')
        .pipe(sass())
        .on('error', function(err){ console.log(err.message); })
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./web/dist/css'));
});*/

gulp.task("babel", function () {
    return gulp.src("src/js/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist/js/"));
});

gulp.task('default', ['babel']);

gulp.task('watch', function () {
    gulp.watch('./src/**/*.*', ['default'])
        .on('error', function(err){ console.log(err.message); });
})
