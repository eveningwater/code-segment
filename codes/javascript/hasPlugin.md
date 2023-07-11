| 标题                      | 标签                                                     |
| ------------------------- | -------------------------------------------------------- |
| hasPlugin(检测浏览器插件) | window,navigator,plugins(浏览器窗口对象，导航代理，插件) |

检测浏览器插件。

- 传入一个插件名字 name 参数作为检测的插件名。
- 遍历 window.navigator.plugins 属性迭代对象，每一个属性调用 toLowerCase 方法转换成小写字母，然后使用 indexOf 方法检测是否与 name 匹配。
- IE 浏览器中使用 ActiveXObject 构造函数检测，由于可能会出错，所以需要 try...catch 语句包裹。

> 代码如下:

```js
const hasPlugin = () => {
  const hasOtherBrowserPlugin = pluginName => {
    pluginName = pluginName.toLowerCase();
    for (let plugin of window.navigator.plugins) {
      //plugin可能是一个对象
      const _plugin = typeof plugin === 'string' ? plugin : plugin.name;
      if (_plugin.toLowerCase().indexOf(pluginName) > -1) {
        return true;
      }
    }
    return false;
  };
  const hasIEPlugin = pluginName => {
    try {
      new ActiveXObject(pluginName);
      return true;
    } catch (ex) {
      return false;
    }
  };
  return {
    hasOtherBrowserPlugin,
    hasIEPlugin
  };
};
```

> 调用方式:

```js
const { hasOtherBrowserPlugin, hasIEPlugin } = hasPlugin();
//在非IE浏览器中检测flash插件
hasOtherBrowserPlugin('Flash'); //如果存在该插件则返回true
//在IE浏览器中检测flash插件
hasIEPlugin('ShockwaveFlash.ShockwaveFlash'); //如果存在该插件则返回true
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/hasPlugin.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/hasPlugin.html"></iframe>
