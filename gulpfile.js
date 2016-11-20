const gulp = require('gulp'),
	webpackStream = require('webpack-stream'),
	babel = require('gulp-babel');

gulp.task('scripts', function () {
	gulp.src('src/app.js')
		.pipe(webpackStream({
			module: {
					loaders: [
							{
									test: /\.(jsx|js)$/,
									loader: 'babel-loader',
									exclude: /(node_modules)/,
									query: {
											presets: ['es2015', 'react']
									}
							},
					]
			},
			output: {
				filename: 'app.js'
			}
		}))
		.pipe(gulp.dest('./dist/js'))
});

gulp.task('copy', function () {
	gulp.src('src/index.html')
		.pipe(gulp.dest('./dist'));
	gulp.src('src/css/*.*')
		.pipe(gulp.dest('./dist/css'));
	gulp.src('src/js/vendors/*.*')
		.pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', function () {
	gulp.watch(['src/**/*.js','src/**/*.jsx'], ['scripts', 'copy']);
});

gulp.task('default', ['scripts', 'copy', 'watch']);
