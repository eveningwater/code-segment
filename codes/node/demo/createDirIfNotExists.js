const fs = require('fs');
const createDirIfNotExists = dir =>
  !fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined;

createDirIfNotExists('test');
