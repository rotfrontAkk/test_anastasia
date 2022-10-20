var gulp = require ('gulp');
var sass = require ('gulp-sass');

gulp.task('sass', function(){
	gulp.src('./site/**/*.scss')
	.pipe(sass().on('error',sass.logError))
	.pipe(gulp.dest('./conditer_site'));
})


gulp.task('sass:watch', function(){
	gulp.watch('./site/**/*.scss', ['sass']);
})
