| 标题                      | 标签                                              |
| ------------------------- | ------------------------------------------------- |
| deepFlatten(深度展开数组) | array,recursion,intermediate(数组,递归，两者之间) |

深度展平数组。

- 使用递归。
- 使用 array_push、splat 运算符(展开运算符...)和空数组展平数组。
- 以递归方式展平每个数组元素。

> 代码如下:

```php
function deepFlatten($items){
    $res = []
    foreach($items as $item){
        if(is_array($item)){
            array_push($res,...deepFlatten($item));
        }else{
            // []语法，表示在数组末尾添加一个元素,也可以使用array_push()函数
            // array_push($res,$item);
            $res[] = $item;
        }
        return $res;
    }
}
```

> 使用方式:

```php
deepFlatten([1, [2], [[3], 4], 5]); // [1, 2, 3, 4, 5]
```
