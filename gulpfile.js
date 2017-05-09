var gulp = require('gulp');
var del = require('del');
var connect = require('connect');
var serve = require('serve-static');
var browsersync = require('browser-sync');

gulp.task('copy',function(){
	gulp.src('src/css/*.css')
		.pipe(gulp.dest('dist/css'));
	gulp.src('src/js/*.js')
		.pipe(gulp.dest('dist/js'));
	gulp.src('src/fonts/*')
		.pipe(gulp.dest('dist/fonts'));
});

gulp.task('clean',function(cb){
	del(['dist'],cb);
});

gulp.task('server',function(){
	return connect().use(serve(__dirname))
		.listen(8080)
		.on('listening',function(){
			console.log('Server Running...')
		});
});

gulp.task('browsersync',function(cb){
	return browsersync({
		server: {
			baseDir: './'
		}
	},cb);
});

gulp.task

gulp.task('watch',function(){
	gulp.watch('*.html',function(){
		browsersync.reload();
	});
});

gulp.task('default',['copy','server','browsersync','watch']);