|  标题   | 标签  |
|  ----  | ----  |
| objectify(将数组映射成对象) | array,object(数组，对象) |

使用提供的映射函数将对象数组映射到对象。

* 使用 Array.prototype.reduce() 将数组映射到对象。
* 使用 mapKey 映射对象的键，使用 mapValue 映射值。

```js
const objectify = (arr,mapKey,mapValue = i => i) => arr.reduce((acc,item) => {
    acc[mapKey(item)] = mapValue(item);
    return acc;
},{})
```

<div class="code-editor" data-url="codes/javascript/ts/objectify.ts" data-language="typescript"></div>

> 调用方式:

```js
const people = [ { name: 'John', age: 42 }, { name: 'Adam', age: 39 } ];
objectify(people, p => p.name.toLowerCase());
// { john: { name: 'John', age: 42 }, adam: { name: 'Adam', age: 39 } }
objectify(
  people,
  p => p.name.toLowerCase(),
  p => p.age
);
// { john: 42, adam: 39 }
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/objectify.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/objectify.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/objectify.html"></iframe>