| 标题                       | 标签                        |
| -------------------------- | --------------------------- |
| last(获取数组最后一个元素) | array,beginner(数组,初学者) |

返回数组中的最后一个元素。

- 使用 [end](https://www.php.net/manual/en/function.end.php) 返回数组中的最后一项。

> 代码如下:

```php
function last($items){
    return end($items);
}
```

> 使用方式:

```php
last([1, 2, 3]); // 3
```