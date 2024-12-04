| 标题                     | 标签                        |
| ------------------------ | --------------------------- |
| rotate(反转数组中的元素) | array,beginner(数组,初学者) |

按移位次数旋转数组（向左）。

- 给定 $shift 索引，将 $shift 之后的数组值与 $shift 之前的值合并。

> 代码如下:

```php
function rotate($arr,$shift){
    for($i=0;$i<$shift;$i++){
        array_push($arr,array_shift($arr));
    }
    return $arr;
}
```

> 使用方式:

```php
rotate([1, 3, 5, 2, 4]); // [3, 5, 2, 4, 1]
rotate([1, 3, 5, 2, 4], 2); // [5, 2, 4, 1, 3]
```
