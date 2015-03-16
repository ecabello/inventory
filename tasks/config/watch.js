/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function(grunt) {

	grunt.config.set('watch', {
		// Front end React processing
		jsx : {
			files: ['assets/js/src/**/*.jsx'],
			tasks: ['react','browserify','copy:dev']
		},

		css: {
			files: 'assets/css/src/**/*.scss',
			tasks: ['compass','copy:dev'],
			options: {
				livereload: true,
			}
		},

		// Watch images so uploaded ones get published
		images: {
			// Assets to watch:
			files: ['assets/images/**/*'],
			tasks : ['copy:dev'],
			// When assets are changed:
			//tasks: ['syncAssets' , 'linkAssets'],
			options: { event: ['changed', 'added', 'deleted']}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
};
