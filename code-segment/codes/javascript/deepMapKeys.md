|  标题   | 标签  |
|  ----  | ----  |
| deepMapKeys(深度查找对象的属性并对每一个属性执行相应的操作) | object,recursion(对象，递归) |

深度映射对象的键。

* 创建一个与提供的对象具有相同值的对象，以及通过为每个键运行提供的函数生成的键。
* 使用 `Object.keys()` 迭代对象的键。
* 使用 `Array.prototype.reduce()` 使用 `handler` 创建具有相同值和映射键的新对象。

> 代码如下:

```js
const deepMapKeys = (obj,handler) => Array.isArray(obj) ? 
obj.map(val => deepMapKeys(val,handler)) 
: typeof obj === "object" ? 
Object.keys(obj).reduce((acc,cur) => {
    const key = handler(cur);
    const val = obj[cur];
    acc[key] = val !== null && typeof val === "object" ? deepMapKeys(val,handler) : val;
    return acc;
},{}) : obj;
```

> 调用方式:

```js
const obj = {
  foo: '1',
  nested: {
    child: {
      withArray: [
        {
          grandChild: ['hello']
        }
      ]
    }
  }
};
const upperKeysObj = deepMapKeys(obj, key => key.toUpperCase());
/*
{
  "FOO":"1",
  "NESTED":{
    "CHILD":{
      "WITHARRAY":[
        {
          "GRANDCHILD":[ 'hello' ]
        }
      ]
    }
  }
}
*/
```

> 应用场景