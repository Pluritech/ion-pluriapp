var chalk = require('chalk');
var fs = require('fs');
var path = require('path');
var useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

var env = process.env.PLURI_ENV;

useDefaultConfig.prod.resolve.alias = {
  '@app/env': path.resolve(environmentPath())
};

useDefaultConfig.dev.resolve.alias = {
  '@app/env': path.resolve(environmentPath())
};

function environmentPath() {
  var filePath;
  if (!env) {
    filePath = './src/environments/environment.dev.ts';
  } else {
    filePath = './src/environments/environment' + (env === 'prod' ? '' : '.' + env) + '.ts';
  }
  if (!fs.existsSync(filePath)) {
    console.log(chalk.red('\n' + filePath + ' does not exist!'));
  } else {
    return filePath;
  }
}

module.exports = function () {
  return useDefaultConfig;
};
