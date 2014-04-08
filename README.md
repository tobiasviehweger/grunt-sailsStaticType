# grunt-sailsStaticType

> Generate POJO's from sails models to use for intellisense

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-sailsStaticType --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-sailsStaticType');
```

## The "sailsStaticType" task

### Overview
In your project's Gruntfile, add a section named `sailsStaticType` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  sailsStaticType: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

See Gruntfile.js for usage
