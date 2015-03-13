module.exports = function(grunt) {

    grunt.config.set('browserify', {
        dist : {
                files : {
                    'assets/js/auth.js' : 'assets/js/build/app.js',
                    'assets/js/public.js' : 'assets/js/build/public.js'
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

