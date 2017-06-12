module.exports = {
  options: {
    livereload: 35729
  },
  sass: {
    files: ['_sass/*.scss'],
    tasks: ['sass:development', 'shell:jekyllDev', 'copy:fonts']
  },
  jekyllSources: {
    files: ['assets/*/*/*',
      '_plugins/*',
      '_includes/**/*.html',
      '_includes/**/*.md',
      '_layouts/*/*.html',
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
    tasks: ['sass:development', 'shell:jekyllDev', 'copy:fonts']
  }
};
