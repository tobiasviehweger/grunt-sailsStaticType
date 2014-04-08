/*
 * grunt-sailsStaticType
 * https://github.com/tobiasviehweger/grunt-sailsStaticType
 *
 * Copyright (c) 2014 Tobias Viehweger
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('sailsStaticType', 'Generate POJOs from sails models to use for intellisense', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).forEach(function(file) {
        
		var model = require('../' + file);
        
		if(model.attributes)
		{
			var modelName = path.basename(file, '.js')';
			var targetName = file.replace(modelName, '_' + modelName);
			modelName = '_' + modelName;
			
			var content = 'var ' + modelName + ' = (function () {' +
						  'function ' + modelName + '() {';
			
			for(var propName in model.attributes) {
				if(typeof model.attributes[propName] === 'function')
					continue;
				
				content += 'this.' + propName + ' = "";';
			}
			
			content += '}' +
			  'return User;' +
			  '})();' +
			  'module.exports = User;'
			  
			grunt.file.write(targetName, content);
			grunt.log.writeln('File ' + targetName + ' created');
		}
      });
    });
  });

};
