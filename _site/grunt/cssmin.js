module.exports = {
  options: {
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>.By David Egan & Rory Egan: http://carawebs.com */'
  },
  my_target: {
    src: 'css/main.un.css',
    dest: 'css/main.min.css'
  }
};