module.exports = function(grunt) {

grunt.initConfig({
  clean: {
  build: {
    src: ["scss/app.scss"]
  }
},

  concat: {
         dist: {
           src: [
             'scss/*.scss',
           ],
           dest: 'scss/app.scss',
         }
       },
  sass: {
    dist: {
      files: {
        'css/styles.css' : 'scss/app.scss'
      }
    }
  },
  watch: {
    css: {
      files: 'scss/**/*.scss',
      tasks: ['clean','concat','sass']
    },
    bundle: {
     files: 'app.js',
     tasks: ['browserify']
   }

  },

    // browserify
  browserify: {
    js: {
      src: ['app.js'], //ideally src is templates/**/*.hbs rather than on a specific module
      dest: 'bundle.js'
    },
    options: {
      transform: ['hbsfy'],
      // watch: true,
      // keepAlive: true
    }
  }

});

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.registerTask('default', ['browserify', 'watch'])
};
