module.exports = {
  smallTask: {
    options: {
      format: '{jpg,gif,png,jpeg}',
      gravity: 'center',
      height: 160,
      width: 240,
      expand: true
    },
    files: {
      'assets/images/small-images': ['_source-images/*.{jpg,gif,png,jpeg}']
    }
  },
  mediumTask: {
    options: {
      format: '{jpg,gif,png,jpeg}',
      gravity: 'center',
      height: 460,
      width: 720,
      expand: true
    },
    files: {
      'assets/images/medium-images': ['_source-images/*.{jpg,gif,png,jpeg}']
    }
  },
  bigTask: {
    options: {
      format: '{jpg,gif,png,jpeg}',
      gravity: 'center',
      height: 1064,
      width: 1920,
      expand: true
    },
    files: {
      'assets/images/big-images': ['_source-images/*.{jpg,gif,png,jpeg}']
    }
  }
};