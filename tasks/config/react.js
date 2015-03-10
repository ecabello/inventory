module.exports = function(grunt) {

  grunt.config.set('react', {
      files: {
        expand: true,
        cwd: 'assets/js/src',
        src: ['**/*.jsx'],
        dest: 'assets/js/build',
        ext: '.js',
        options: {
              harmony: true
            },
      }
  });

  grunt.loadNpmTasks('grunt-react');
};
