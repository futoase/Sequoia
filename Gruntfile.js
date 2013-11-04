module.exports = function (grunt) {

  grunt.initConfig({
    concat: {
      dist: {
        src: ['lib/sequoia.js'],
        dest: 'sequoia.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['concat']);
}
