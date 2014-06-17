module.exports = function (grunt) {
  'use strict'

  grunt.initConfig({
    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 9000,
          base: 'app',
          keepalive: true,
          open: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('server', ['connect:server']);
};
