module.exports = function (grunt) {

  grunt.initConfig({
    concat: {
      dist: {
        src: ['lib/bucket.js', 'lib/sequoia.js', 'lib/browser.js'],
        dest: 'sequoia.js'
      }
    },
    uglify: {
      terget: {
        files: {
          'sequoia.min.js': ['sequoia.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['concat', 'uglify']);
}
