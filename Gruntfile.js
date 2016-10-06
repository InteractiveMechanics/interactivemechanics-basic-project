module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        sass: {
            dist: {
                files: {
                    'css/main.css': '_sass/main.scss'
                }
            }
        },
        watch: {
            css: {
                files: ['**/*.scss'], 
                tasks: ['sass'] 
            }
		},
        connect: {
            server: {
                options: {
                    port: 4000,
                    debug: true
                }
            }
        },
        removelogging: {
            dist: {
                src:  'js/**/*.js',
                dest: 'js/dist/**/*.js'
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.loadNpmTasks("grunt-remove-logging");
    
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('startServer', ['connect', 'watch']);
    grunt.registerTask('production', ['sass', 'removelogging']);
};