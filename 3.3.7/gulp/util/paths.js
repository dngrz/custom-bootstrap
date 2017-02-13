var path = require('path');

var lessDir = path.resolve('./less/');

var paths = {
  less: {
    lessDir: lessDir,
    dest: path.resolve('./dist/css'),
    mainFile: 'bootstrap.less',
  }
};

module.exports = paths;
