module.exports = function(grunt) {

require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
    babel: {
        options: {
            sourceMap: false,
            presets: ['es2015']
        },
        dist: {
            files: [{
                expand: true, //Enable dinamic expansion
                cwd: 'proj/src/js', //src mathes are relative to this path
                src: ['**/*.js'],
                dest: 'proj/js_babel', //Destination path prefix
                ext: '.js',  // Dest filepaths will have this extention
                extDot: 'first'  //Extention in filenames begin after the first
            }]
        }
    },
        watch: {
                babel: {
                  files: ['proj/src/js/*.js'],
                  tasks: ['babel'],
                },
            }

});
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', ['babel']);



  
};