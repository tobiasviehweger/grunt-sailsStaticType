/*
 * grunt-sailsStaticType
 * https://github.com/tobiasviehweger/grunt-sailsStaticType
 *
 * Copyright (c) 2014 Tobias Viehweger
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Configuration to be run (and then tested).
    sailsStaticType: {
        src: 'api/models/*.js'
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['sailsStaticType']);

};
