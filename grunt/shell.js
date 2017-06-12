module.exports = {
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
    command: 'push-jekyll-starter-staging'
  },
  rsyncProduction: {
    command: 'rsync --progress -a -v -rz --checksum --delete -e "ssh -p 1234" _site/ username@XXX.XXX.XXX.XXX:/var/www/path-to-production/public_html'
  }
};