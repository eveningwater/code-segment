const fs = require('fs');
const JSONToFile = (obj, fileName) =>
  fs.writeFileSync(`${fileName}.json`, JSON.stringify(obj, null, 2));
JSONToFile({ test: 'is passed' }, 'testJsonFile');

// 在当前文件路径下打开终端，执行命令: node JSONToFile.js即可
