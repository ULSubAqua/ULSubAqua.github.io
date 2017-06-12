module.exports = {
  dist: {
    options: {
      ignore: [/\w\.in/,
        '.top-nav-collapse',
        'img-caption',
        '.main-home .top-nav-collapse',
        '.fade',
        '.collapse',
        '.collapsing',
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
        '.carousel-inner > .active.right'
      ],
      stylesheets: ['css/main.css'],
      ignoreSheets: [/fonts.googleapis/]
    },
    files: {
      'css/main.un.css': ['_site/index.html',
        '_site/about.html',
        '_site/healing/index.html',
        '_site/blog/page2/index.html',
        '_site/blog/index.html',
        '_site/safety/index.html',
        '_site/driving-test/index.html',
        '_site/contact/index.html',
        '_site/index.html',
        '_site/about/index.html'
      ]
    }
  }
};