| 标题                            | 标签                        |
| ------------------------------- | --------------------------- |
| orderBy(根据某个条件来排序数组) | array,advanced(数组,高级的) |

按键对数组或对象集合进行排序。

- 对提供的数组使用 sort()，根据 $order 和 $attr 对数组进行排序。

> 代码如下:

```php
function orderBy($items,$attr,$order='asc'){
    $sortItems = [];
    foreach($items as $item){
        $key = is_object($item) ? $item->{$attr} : $item[$attr];
        $sortItems[$key] = $item;
    }

    if($order === 'desc'){
        krsort($sortItems);
    }else{
        ksort($sortItems);
    }

    return array_values($sortItems);
}
```


> 使用方式:

```php
orderBy(
  [
    ['id' => 2, 'name' => 'Joy'],
    ['id' => 3, 'name' => 'Khaja'],
    ['id' => 1, 'name' => 'Raja']
  ],
  'id',
  'desc'
); // [['id' => 3, 'name' => 'Khaja'], ['id' => 2, 'name' => 'Joy'], ['id' => 1, 'name' => 'Raja']]
```
