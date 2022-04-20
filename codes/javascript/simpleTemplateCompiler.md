|  标题   | 标签  |
|  ----  | ----  |
| simpleTemplateCompiler(简易模板编译器) | template,compiler(模板,编译器) |

将字符串中定义的模板映射成相应的数据。

* 使用正则表达式匹配模板
* 使用字符串的replace方法进行替换

> 代码如下:

```js
    const simpleTemplateCompiler = template => data => template.replace(/\{\{(.*?)\}\}/g,(match,key) => data[key.trim()]);
```

> 调用方式:

```js
    simpleTemplateCompiler("{{ year }}-{{ month }}-{{ day }}")({ year:"2021",month:"06",day:"08" });
    //2021-06-08
```

> 应用场景