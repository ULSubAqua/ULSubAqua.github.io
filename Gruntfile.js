module.exports = function(grunt) {

    // Define scope for `load-grunt-tasks` package. Creates `grunt.loadNpmTasks()`
    // for the devDependencies/dependencies that are defined in `package.json`.
    var tasks = { scope: ['devDependencies', 'dependencies'] };

    // This variable defines location of config files for `load-grunt-configs`
    // package. By default, the package expects config files in `/config`.
    var options = {
      config: {
        src: "grunt/*.js",
        fs: require('fs'),
        glob: require('glob'),
        sizeOf: require('image-size'),
        index: 0,
        YAML: require('yamljs'),
      }
    };

    // Require `load-grunt-configs` with the defined options.
    var configs = require('load-grunt-configs')(grunt, options);

    // Load the various task configuration files.
    grunt.initConfig(configs);

    // Auto-load tasks.
    require('load-grunt-tasks')(grunt, tasks);

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

    // Default grunt task - local Development
    grunt.registerTask('default', [
        'sass:development',
        'concat',
        'shell:jekyllDev',
        'copy:fonts',
        'watch'
    ]);

    // Deploy to Staging with `grunt deployStaging` then reset the local copy.
    grunt.registerTask('deployStaging', [
        'shell:jekyllNoMap',
        'sass:production',
        'uncss:dist',
        'cssmin',
        'uglify:dist',
        'shell:jekyllStaging',
        'copy:fonts',
        'shell:rsyncStaging',
        'sass:development',
        'concat',
        'shell:jekyllDev',
        'copy:fonts',
        'watch'
    ]);

    // Deploy to Production with `grunt deployProduction` then reset the local copy.
    grunt.registerTask('deployProduction', [
        'shell:jekyllNoMap',
        'sass:production',
        'uncss:dist',
        'cssmin',
        'uglify:dist',
        'shell:jekyllProduction',
        'copy:fonts',
        'shell:rsyncProduction',
        'sass:development',
        'concat',
        'shell:jekyllDev',
        'copy:fonts',
        'watch'
    ]);

    // Resize and crop images in _source-images and put them inside assets/images
    grunt.registerTask('imageCheck', [
        'responsive_images',
        'resize_crop',
    ]);

    grunt.registerTask('imageManifest', [
        'imageinfo'
    ]);

}
