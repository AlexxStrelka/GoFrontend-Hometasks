module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
  options: {
    // define a string to put between each file in the concatenated output
    separator: ';'
  },
  dist: {
    // the files to concatenate
    src: ['js/source/*.js'],
    // the location of the resulting JS file
    dest: 'js/mainscript.js'
  }
},

  uglify: {
    dist: {
      src: ['js/mainscript.js'],
      dest: 'js/mainscript.min.js'
    }
  }


});

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
 

  grunt.registerTask('default', ['concat', 'uglify']);

};