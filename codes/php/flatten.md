| 标题                          | 标签                               |
| ----------------------------- | ---------------------------------- |
| flatten(展开数组(仅展开一层)) | array,intermediate(数组，两者之间) |

将数组展平至一层深度。

- 使用 array_push()、splat 运算符和 array_values() 展平数组。

> 代码如下:

```php
function flatten($items){
    $res = []
    foreach($items as $item){
        if(is_array($item)){
            array_push($res,...array_values($item));
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
flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
```
