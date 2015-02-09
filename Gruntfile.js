/*jshint node:true, quotmark:single */
'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        qunit: {
            all: 'test/index.html'
        },
        jshint: {
            options: {
                jshintrc: true
            },
            grunt: 'Gruntfile.js',
            source: 'src/**/*.js',
            tests: 'test/**/*.js'
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.license %> */\n'
            },
            build: {
                files: {
                    'build/jquery.domPath-<%= pkg.version %>.min.js': 'src/jquery.domPath.js'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            files: '{src,test}/**/*.js',
            tasks: 'default'
        }
    });

    //for every grunt dependency load npm task
    for (var key in grunt.file.readJSON('package.json').devDependencies) {
        if (key !== 'grunt' && key.indexOf('grunt') === 0) {
            grunt.loadNpmTasks(key);
        }
    }

    grunt.registerTask('test', ['jshint', 'qunit']);
    grunt.registerTask('default', ['jshint', 'qunit', 'uglify']);
};