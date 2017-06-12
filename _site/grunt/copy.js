module.exports = {
  css: {
    files: {
      '_site/css/main.css': 'css/main.css'
    }
  },
  fonts: {
    files: [{
      cwd: 'bower_components/font-awesome/fonts',
      src: '**/*',
      dest: '_site/fonts',
      expand: true
    }]
  }
};