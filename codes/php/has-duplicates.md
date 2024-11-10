| 标题                                  | 标签                         |
| ------------------------------------- | ---------------------------- |
| hasDuplicates(数组中是否含有重复元素) | array,beginner(数组，初学者) |

检查平面列表中是否存在重复值，如果存在重复值则返回 true，如果所有值都是唯一的则返回 false。

- 使用 count() 和 array_unique() 检查 $items 是否存在重复值。

> 代码如下:

```php
function hasDuplicates($arr){
    return count($arr) > count(array_unique($arr))
}
```

> 使用方式:

```php
hasDuplicates([1, 2, 3, 4, 5, 5]); // true
```
