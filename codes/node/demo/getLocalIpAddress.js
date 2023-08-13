const os = require('os');

const interfaces = os.networkInterfaces();
const hostIp = function () {
  let IPv4;
  if (process.platform === 'darwin') {
    for (let i = 0; i < interfaces.en0.length; i++) {
      if (interfaces.en0[i].family == 'IPv4') {
        IPv4 = interfaces.en0[i].address;
      }
    }
  } else if (process.platform === 'win32') {
    for (const devName in interfaces) {
      const iface = interfaces[devName];
      for (let i = 0; i < iface.length; i++) {
        const alias = iface[i];
        if (
          alias.family === 'IPv4' &&
          alias.address !== '127.0.0.1' &&
          !alias.internal
        ) {
          IPv4 = alias.address;
        }
      }
    }
  }

  return IPv4;
};

console.log(hostIp());
