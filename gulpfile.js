let gulp 			= require( "gulp" );
let concat 			= require( "gulp-concat" );
let minify 			= require( "gulp-minify" );

/**
 * Minify JS files
 */
gulp.task( "js", function() {
	return gulp.src( [
		"src/KrisKrossElement.js",
		"src/KrisKross.js"
	] )
	.pipe( concat( "kriskross.js" ) )
	.pipe( minify( {
		ext: {
			src:'.js',
			min:'.min.js'
		},
		noSource: true
	} ) )
	.pipe( gulp.dest( "dist" ) );
} );

/**
 * Default task
 */
gulp.task( "default", [ "js" ] );
