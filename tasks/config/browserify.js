module.exports = function(grunt) {

    grunt.config.set('browserify', {
        dist : {
                files : {
                    'assets/js/main.js' : 'assets/js/build/**/*.js'
                },
                options : {
                    browserifyOptions : {
                        debug : true,
                    }
                }
            }
    });

    grunt.loadNpmTasks('grunt-browserify');
};

