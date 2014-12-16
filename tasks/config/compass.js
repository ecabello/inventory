module.exports = function(grunt) {

  grunt.config.set('compass', {
    compass: {
      dev: {
        options: {
          sassDir: 'assets/css/src',
          cssDir:  'assets/css'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
};
