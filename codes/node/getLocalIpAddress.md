| 标题                                | 标签                        |
| ----------------------------------- | --------------------------- |
| getLocalIpAddress(获取本机 IP 地址) | node,ip(node 环境，ip 地址) |

在[node.js](https://nodejs.org/en/)中生成 UUID。

- 使用 os.networkInterfaces()获取 ip 地址信息。
- 使用 process.platform 判断当前属于什么环境，根据不同的环境遍历 ip 地址信息接口，找到 ip 地址并赋值给结果变量，然后返回结果。

> 代码如下:

```js
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
```

> 调用方式:

```js
hostIp(); // '192.168.10.170'
```

> 应用场景

<div class="code-editor" data-url="codes/node/demo/getLocalIpAddress.js" data-language="javascript"></div>

在当前文件路径下打开终端，执行命令:

```shell
node getLocalIpAddress.js
```

在控制台就会看到本机 ip 地址。
