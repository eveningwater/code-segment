| 标题                                  | 标签                                            |
| ------------------------------------- | ----------------------------------------------- |
| IEToChrome(IE 浏览器跳转到谷歌浏览器) | browser,IE,Chrome(浏览器,IE 浏览器，谷歌浏览器) |

从 IE 浏览器中跳转到谷歌浏览器。

- 创建 ActiveXObject 实例。

> 备注: 由于IE浏览器已弃用，所以该工具方法可以忽略，仅供了解。

> 代码如下:

```js
/*
        命令参数说明
        cmd.exe /c dir 是执行完dir命令后关闭命令窗口。
        cmd.exe /k dir 是执行完dir命令后不关闭命令窗口。
        cmd.exe /c start dir 会打开一个新窗口后执行dir指令，原窗口会关闭。
        cmd.exe /k start dir 会打开一个新窗口后执行dir指令，原窗口不会关闭。
        这里的dir是start chrome www.baidu.com//用谷歌浏览器打开百度
    */
const IEToChrome = url =>
  new ActiveXObject('WScript.Shell').Run('chrome ' + url, 0, true);
// new ActiveXObject("WScript.Shell").Run("cmd.exe /c start " + url,0,true);//这个也可以
// var IEToChrome = function(url){
//     return new ActiveXObject("WScript.Shell").Run("chrome " + url, 0, true);
// }
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/IEToChrome.ts" data-language="typescript"></div>

> 调用方式:

```js
IEToChrome(location.href);
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/IEToChrome.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/IEToChrome.html"></iframe>
