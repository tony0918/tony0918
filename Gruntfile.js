module.exports = function (grunt) {

  grunt.initConfig({
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'node_modules/',
            src: [
              'angular/angular.min.js',
              'angular-aria/angular-aria.min.js',
              'angular-animate/angular-animate.min.js',
              'angular-material/angular-material.min.js',
              'angular-material/angular-material.min.css'
            ],
            dest: 'libs/'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['copy']);
};