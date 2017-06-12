# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

  This repository is a multi-page jekyll template. The frontpage is organised through a series of sections that get inline style rules to
  determine background image, image opaque overlay and light or dark text. The frontmatter of each section determines what layout that section
  will follow and what, if any, backgound image, colour, or opacity the section gets.

  The site services and projects are both organised into
  collections, and their respective pages will loop through their collection to detect existing services and projects. Client information is entered
  through several .csv spreadsheets in the data of the site.

### ImageManifest Task:

  The grunt imageManifest task will auto-generate refernces all existing images in the images
  folder(including any subdirectories) into the image-manifest.yml file. The task will also give an image a category based on where it is situated. For
  example an image inside "assets/images/medium-images" will be automatically given the category "images-medium-images".

### ImageCheck Task:

  This is a grunt task so it should be placed in the gruntfile of the website. It requires the "grunt-image-resize", "grunt-resize-crop", and "grunt-responsive-images" dependencies to be added to the package.json of the website. Running the command npm install should then install these dependencies.

  The grunt imagecheck task is a task to compress and trim images. All initial images should be placed within a ```_source-images``` folder. I does not matter if you place any subdirectories inside the ```_source-images``` folder as the task will keep the directory structure of the ```_source-images``` folder.

  The task is run with the command grunt imagecheck. When the task is run it will create three folders inside assets/images called big-images, medium-images and small-images if they do not already exist. The task scales the images that will go in the big folder to a width of 1920px, the images to go to the medium folder to width of 720px and the images to go in the small folder to a width of 240px. All images have their quality degraded to 60% in order to reduce file size. Once the images have been scaled and reduced in quality the task will crop the big images to a height of 1064px, the medium images to a height of 460px and the small images to a height of 160px.

  The task creates big, medium and small versions of all images and subdirectories in the ```_source-images``` folder. If there is for example a ```_source-images``` folder containing an image and a subdirectory containing another image, once the task is run there will be a big, medium and small version of the first image and the image in the subdirectory(with the same directory structure as in the ```_source-images``` folder) in each of the big, medium and small folders inside in assets/images. If there are already existing images of the same names as the newly processed images, the task will overwrite them to the new and processed version.

### How do I get set up?

* Clone the template

  Move to your new directory, change the baseurls in the config files to your new baseurl and run these commands:

* npm install (may require sudo)
* bower install
* cp HINTGruntfile.js Gruntfile.js
* grunt

Now navigate to your localhost to see the site!

### Notes for converting sites to Bootstrap 4:

* All px needs to be converted to rem obviously. I used an atom plugin to do it quickly.
* Note that the paths for Bootstrap files to be concatenated need to be changed in the Gruntfile.
* Items in a carousel should be given the class carousel-item
* Bootstrap 4 Alpha 6 makes flexboxes mandatory, and may cause alot of issues with layout, particularly with regards to centred items.

### Integrating Icomoon fonts:

 The best way to do this is to download the font from the app as usual, then put the css file you get from this with the rest of your styling files and
 import using the manifold.scss. You'll have to adjust the paths in the icomoon style file to point to wherever you put the actual icons in your directory
 (I made a fonts folder in assets and put them there). Then just make sure the icons.scss file (or wherever you've set up your icon styles) to reference icomoon icon names.

### General Info:

 The site is currently using Boostrap 4 Alpha 6. This requires the mandatory use of flexboxes, which cannot be opted out of. The site also using load-grunt-configs and load-grunt-tasks dependencies in order to abstract each gruntfile task into its own file within the grunt/ folder. An explanation of how this was set up can be found here: https://github.com/creynders/load-grunt-configs
