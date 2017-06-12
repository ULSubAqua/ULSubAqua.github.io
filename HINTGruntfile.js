module.exports = function(grunt) {

  // load all grunt tasks
  // ---------------------------------------------------------------------------
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // List of Bootstrap files to be concatenated for the development build
  // ---------------------------------------------------------------------------
  var jsDevFileList = [
    'bower_components/jquery/jquery.min.js',
    'bower_components/bootstrap-sass/assets/javascripts/bootstrap/button.js',
    'bower_components/bootstrap-sass/assets/javascripts/bootstrap/carousel.js',
    'bower_components/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
    'bower_components/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js',
    'bower_components/bootstrap-sass/assets/javascripts/bootstrap/transition.js',
    'bower_components/bootstrap-sass/assets/javascripts/bootstrap/modal.js',
    'bower_components/masonry/dist/masonry.pkgd.min.js',
    'bower_components/imagesloaded/imagesloaded.pkgd.min.js'
  ];

  // Array of jquery, Bootstrap and custom JS - to be concatenated and minified to a single file
  // ---------------------------------------------------------------------------
  var jsProdFileList = [
    'bower_components/jquery/jquery.min.js',
    'bower_components/bootstrap-sass/assets/javascripts/bootstrap/button.js',
    'bower_components/bootstrap-sass/assets/javascripts/bootstrap/carousel.js',
    'bower_components/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
    'bower_components/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js',
    'bower_components/bootstrap-sass/assets/javascripts/bootstrap/transition.js',
    'bower_components/bootstrap-sass/assets/javascripts/bootstrap/modal.js',
    'assets/js/custom/custom-jquery.js',
    'assets/js/custom/defer-images.js',
    'assets/js/custom/navbar-shrink.js',
    'bower_components/masonry/dist/masonry.pkgd.min.js',
    'bower_components/imagesloaded/imagesloaded.pkgd.min.js',
    'assets/js/custom/masonry.js'
  ];

  // Project configuration.
  // ---------------------------------------------------------------------------
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Concat for the dev environment
    // ---------------------------------------------------------------------------
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [jsDevFileList],
        dest: 'assets/js/vendor/bootstrap.js',
      },
    },
    // Uglify the JS
    // ---------------------------------------------------------------------------
    uglify: {
      dist: {
        files: {
          'assets/js/scripts.min.js': [ jsProdFileList]
        }
      }
    },
    // Sass task
    // ---------------------------------------------------------------------------
    sass: {
      development: {
        files: {
          'css/main.css': 'css/_main.scss'
        }
      },
      production: {
        options: {
          //sourcemap: true
        },
        files: {
          'css/main.css': 'css/_main.scss'
        }
      }
    },
    // Uncss task
    // ---------------------------------------------------------------------------
    uncss: {
      dist: {
        options: {
          ignore       : [
            // needed for Bootstrap's transitions
            /\w\.in/,
            ".top-nav-collapse",
            "img-caption",
            ".main-home .top-nav-collapse",
            ".fade",
            ".collapse",
            ".collapsing",
            /(#|\.)navbar(\-[a-zA-Z]+)?/,
            /(#|\.)dropdown(\-[a-zA-Z]+)?/,
            '.bs.carousel',
            '.slid.bs.carousel',
            '.slide.bs.carousel',
            '.fade',
            '.fade.in',
            '.collapse',
            '.collapse.in',
            '.collapsing',
            '.alert-danger',
            '.logged-in .navbar-default',
            '.carousel-inner > .next',
            '.carousel-inner > .prev',
            '.carousel-inner > .next',
            '.carousel-inner > .prev',
            '.carousel-inner > .next.left',
            '.carousel-inner > .prev.right',
            '.carousel-inner > .active.left',
            '.carousel-inner > .active.right',
          ],
          stylesheets  : ['css/main.css'],
          ignoreSheets : [/fonts.googleapis/],
          //urls         : [], //Overwritten in load_sitemap_and_uncss task
          //htmlroot     : 'localhost'
        },
        files: {
          'css/main.un.css': [
            '_site/index.html',
            '_site/about.html',
            '_site/healing/index.html',
            '_site/blog/page2/index.html',
            '_site/blog/index.html',
            '_site/safety/index.html',
            '_site/driving-test/index.html',
            '_site/contact/index.html',
            '_site/index.html',
            '_site/about/index.html',

          ]
        }
      },
    },
    // Minify CSS. Grunt task runs this after uncss
    // ---------------------------------------------------------------------------
    cssmin: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>.' +
        'By David Egan & Rory Egan: http://carawebs.com */'
      },
      my_target: {
        src: 'css/main.un.css',
        dest: 'css/main.min.css'
      }
    },
    // Copy Task
    // ---------------------------------------------------------------------------
    copy: {
      css : {
        files: {
          '_site/css/main.css': 'css/main.css'
        }
      },
      fonts: {
        files: [{
          cwd: 'bower_components/font-awesome/fonts',  // set working folder / root to copy
          src: '**/*',           // copy all files and subfolders
          dest: '_site/fonts',   // destination folder
          expand: true           // required when using cwd
        }]
      },
    },

    // Image processing
    // ---------------------------------------------------------------------------
    responsive_images: {
      smallTask: {
        options: {
          engine: 'im',
          sizes: [{
            name: "small-images",
            width: 240,
            quality: 50,
          },]
        },
        files: [{
          cwd: '_source-images/',
          src: ['**/*.{jpg,gif,png,jpeg}'],
          custom_dest: 'assets/images/{%= name %}/{%= path %}/',
          expand: true,
        }]
      },
      mediumTask: {
        options: {
          engine: 'im',
          sizes: [{
            name: "medium-images",
            width: 720,
            quality: 50,
          },]
        },
        files: [{
          cwd: '_source-images/',
          src: ['**/*.{jpg,gif,png,jpeg}'],
          custom_dest: 'assets/images/{%= name %}/{%= path %}/',
          expand: true,
        }]
      },
      bigTask: {
        options: {
          engine: 'im',
          sizes: [{
            name: "big-images",
            width: 1920,
            quality: 50,
          },]
        },
        files: [{
          cwd: '_source-images/',
          src: ['**/*.{jpg,gif,png,jpeg}'],
          custom_dest: 'assets/images/{%= name %}/{%= path %}/',
          expand: true,
        }]
      },
    },
    // Main Image task
    // ---------------------------------------------------------------------------
    resize_crop: {
      smallTask: {
        options: {
          format: "{jpg,gif,png,jpeg}",
          gravity: "center",
          height: 160,
          width: 240,
          expand: true,
        },
        files: {
          'assets/images/small-images': [
            '_source-images/*.{jpg,gif,png,jpeg}',
          ],
        },
      },
      mediumTask: {
        options: {
          format: "{jpg,gif,png,jpeg}",
          gravity: "center",
          height: 460,
          width: 720,
          expand: true,
        },
        files: {
          'assets/images/medium-images': [
            '_source-images/*.{jpg,gif,png,jpeg}',
          ],
        },
      },
      bigTask: {
        options: {
          format: "{jpg,gif,png,jpeg}",
          gravity: "center",
          height: 1064,
          width: 1920,
          expand: true,
        },
        files: {
          'assets/images/big-images': [
            '_source-images/*.{jpg,gif,png,jpeg}',
          ],
        },
      },
    },

    // Shell tasks: environment specific
    // ---------------------------------------------------------------------------
    shell: {
      jekyllStaging: {
        command: 'rm -rf _site/*; jekyll build --config _config.yml,_config_staging.yml',
        stdout: true
      },

      jekyllDev: {
        command: 'rm -rf _site/*; jekyll build --config _config.yml,_config_dev.yml',
        stdout: true
      },

      jekyllProduction: {
        command: 'rm -rf _site/*; jekyll build --config _config.yml,_config_production.yml',
        stdout: true
      },

      rsyncStaging: {
        // Save server rsync commands in a BASH script of this name under `usr/local/bin`
        command: 'push-jekyll-starter-staging'
      },

      rsyncProduction: {
        // Move this to mirror the staging deploy script
        command: 'rsync --progress -a -v -rz --checksum --delete -e "ssh -p 1234" _site/ username@XXX.XXX.XXX.XXX:/var/www/path-to-production/public_html'
      }

    },
    // Watch task. see: https://github.com/gruntjs/grunt-contrib-watch/blob/master/docs/watch-examples.md#enabling-live-reload-in-your-html
    // ---------------------------------------------------------------------------
    watch: {
      options: {
        livereload: 35729//true
      },
      sass: {
        files: ['_sass/*.scss'],
        tasks: [
          'sass:development',
          'shell:jekyllDev',
          'copy:fonts'
        ]
      },
      jekyllSources: {
        files: [
          'assets/*/*/*',
          '_plugins/*',
          '_includes/**/*.html',
          '_includes/**/*.md',
          '_layouts/*.html',
          '_posts/*.md',
          '_data/*.yml',
          '_config.yml',
          '_config_dev.yml',
          'index.html',
          'img/*',
          '_data/*.json',
          '_data/*.csv',
          '_data/*.yml',
          'js/*.js',
          '_posts/*',
          'blog/index.html',
          'about/index.html',
          '/*.html',
          '*/*.html',
          '*/*.md',
          '!_site/*'
        ],
        tasks: [
          'sass:development',
          'shell:jekyllDev',
          'copy:fonts'
        ]
      }
    },
    // Server task - not needed as we're using Apache
    // ---------------------------------------------------------------------------
    connect: {
      server: {
        options: {
          base: '_site',
          port: 9000
        }
      }
    },

    open: {
      server: {
        path: 'http://localhost:<%= connect.server.options.port %>/'
      }
    }
  });

  // Build a YAML image manifest for participant logos
  // See: http://benwilhelm.com/the-website/nerd-stuff/2014/12/21/building-an-image-heavy-jekyll-site/
  grunt.registerTask('imageinfo', function(){

    // Force task into async mode and grab a handle to the "done" function.
    var done = this.async();

    var fs = require('fs'),
    glob = require('glob'),
    sizeOf = require('image-size'),
    YAML = require('yamljs');

    var index = 0;

    glob('assets/images/medium-images/**/*.{jpg,JPG,jpeg}', {}, function(err, files){

      var existingYml = fs.readFileSync("./_data/image-manifest.yml").toString();

      // this demarcates auto-generated values from manually added values for things like externally hosted images
      var a = existingYml.split("#!#!#!#!#");
      existingYml = a[0].trim();

      var path = require("path");

      var data = {};
      files.forEach(function(file){

        var dirPath = path.dirname(file);
        var dirs = dirPath.split("/");
        var dimensions = sizeOf(file);
        var image = {
          width: dimensions.width,
          height: dimensions.height,
          aspect: dimensions.width / dimensions.height,
          src: file,
          'images-category': dirs[ dirs.length - 2 ] + '-' + dirs[ dirs.length - 1 ]
        }
        //file = " + file + ";
        data[file] = image;

        index ++;
      })

      var yamlString = YAML.stringify(data, 2, 2);
      var yamlHeading = "\n\n\n#!#!#!#!# Do not edit below this line.\n";
      yamlHeading += "# Generated automatically using `grunt imageManifest` on " + new Date() + "\n\n";

      fs.writeFileSync("./_data/image-manifest.yml", existingYml + yamlHeading + yamlString);

      console.log('Manifest of ' + index + ' images created.');
      done();
    });

    console.log('manifest of ' + index + ' images');

  });

  // Register Grunt Tasks
  // -----------------------------------------------------------------------------
  grunt.registerTask('sassCopy', ['sass:development', 'copy:css']);

  // Test image info Grunt task
  grunt.registerTask('imageManifest', 'imageinfo');

  grunt.registerTask('server', [
    //'resize_crop:mediumTask',
    //'resize_crop:bigTask',
    'sass:development',
    'concat',
    'shell:jekyllDev',
    'copy:fonts',
    'watch'
  ]);

  // Default Grunt task
  grunt.registerTask('default', 'server');

  // Deploy to staging
  grunt.registerTask('deployStaging', [
    //'resize_crop:mediumTask',
    //'resize_crop:bigTask',
    'sass:production',
    'uncss:dist',
    'cssmin',
    'uglify:dist',
    'shell:jekyllStaging',
    'copy:fonts',
    'shell:rsyncStaging',
    // It's built, so reset the local copy:
    'sass:development',
    'concat',
    'shell:jekyllDev',
    'copy:fonts',
    'watch'
  ]);

  // Production Task
  grunt.registerTask('deployProduction', [
    'shell:jekyllProduction',
    'sass:production',
    'uncss:dist',
    'cssmin',
    'uglify:dist',
    'shell:jekyllProduction',
    'copy:fonts',
    'shell:rsyncProduction'
  ]);

  // Test uncss task
  grunt.registerTask('uncheck', [
    'sass:production',
    'uncss:dist',
    'cssmin'
  ]);

  // Image Task
  grunt.registerTask('imagecheck', [
    'responsive_images',
    //'resize_crop',
  ]);

};
