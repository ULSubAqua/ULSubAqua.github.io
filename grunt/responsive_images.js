module.exports = {
  smallTask: {
    options: {
      engine: 'im',
      sizes: [{
        name: 'small-images',
        width: 240,
        quality: 50
      }]
    },
    files: [{
      cwd: '_source-images/',
      src: ['**/*.{jpg,gif,png,jpeg}'],
      custom_dest: 'assets/images/{%= name %}/{%= path %}/',
      expand: true
    }]
  },
  mediumTask: {
    options: {
      engine: 'im',
      sizes: [{
        name: 'medium-images',
        width: 720,
        quality: 50
      }]
    },
    files: [{
      cwd: '_source-images/',
      src: ['**/*.{jpg,gif,png,jpeg}'],
      custom_dest: 'assets/images/{%= name %}/{%= path %}/',
      expand: true
    }]
  },
  bigTask: {
    options: {
      engine: 'im',
      sizes: [{
        name: 'big-images',
        width: 1920,
        quality: 50
      }]
    },
    files: [{
      cwd: '_source-images/',
      src: ['**/*.{jpg,gif,png,jpeg}'],
      custom_dest: 'assets/images/{%= name %}/{%= path %}/',
      expand: true
    }]
  }
};