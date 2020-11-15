# 1.Midway
## 1.1链接速览
  [midway官方文档](https://www.yuque.com/midwayjs/midway_v2/start_app)  
  [midway/Github](https://github.com/midwayjs/midway)  
  [egg文档(midway基于egg)](https://eggjs.org/zh-cn/intro/) 
## 1.2快速搭建
安装全局脚手架&emsp; &emsp;   ```npm i -g @midwayjs/cli```  
查看版本&emsp;&emsp;  ```mw --version```  
创建项目&emsp;&emsp;  ```mw new midwayDemo```   创建后记得 cd midwayDemo进入项目
 
## 1.3使用模板渲染，传统url返回html字符串形式.

### 1.3.1安装依赖包
```egg-view-handlebars```
### 1.3.2配置插件
```
// src/config/plugin.ts .你要能分清exports和export default -。-。
exports.handlebars = {
    enable: true,
    package: 'egg-view-handlebars',
}
```
### 1.3.3修改默认的视图文件地址
去src/app/view 建立一个index.hbs 文件
``` 
// src/config/config.default.ts   //注意appInfo.baseDir默认指向src
config.view={
  root: path.join(appInfo.baseDir, 'view'), // /src/view 
}
```

### 1.3.4配置公共partials
这个配置可比nestjs方便多了

```
// src/config/config.default.ts
exports.handlebars={
    partialsPath: path.join(appInfo.baseDir, 'view/partials') // src/view/partials
  }
```
