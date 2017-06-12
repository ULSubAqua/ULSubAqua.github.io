module.exports = {
  dist: {
    files: {
      'assets/js/scripts.min.js': [
        ['bower_components/jquery/jquery.min.js',
          'bower_components/bootstrap/js/dist/button.js',
          'bower_components/bootstrap/js/dist/carousel.js',
          'bower_components/bootstrap/js/dist/collapse.js',
          'bower_components/bootstrap/js/dist/dropdown.js',
          'bower_components/bootstrap/js/dist/transition.js',
          'bower_components/bootstrap/js/dist/modal.js',
          'assets/js/custom/custom-jquery.js',
          'assets/js/custom/defer-images.js',
          'assets/js/custom/navbar-shrink.js',
          'assets/js/custom/masonry.js'
        ]
      ]
    }
  }
};
