|  标题   | 标签  |
|  ----  | ----  |
| isTravisCI(是否是字符串) | node(node.js) |

检查当前环境是否为[Travis CI](https://travis-ci.org/)。

检查当前环境是否有 TRAVIS 和 CI 环境变量（[参考](https://docs.travis-ci.com/user/environment-variables/#Default-Environment-Variables)）。

```js
const isTravisCI = () => 'TRAVIS' in process.env && 'CI' in process.env;
```

> 调用方式:

```js
isTravisCI(); // true (if code is running on Travis CI)
```

> 应用场景



