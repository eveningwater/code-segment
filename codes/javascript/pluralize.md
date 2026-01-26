| 标题                  | 标签           |
| --------------------- | -------------- |
| pluralize(字符串复数) | string(字符串) |

根据输入的数字返回单词的单数或复数形式，如果提供的话，使用可选的字典。

- 使用闭包定义一个函数，该函数根据 num 的值将给定的单词复数。
- 如果 num 为 -1 或 1，则返回单词的单数形式。
- 如果 num 是任何其他数字，则返回复数形式。
- 省略第三个参数复数，以使用默认的单数词 + s，或在必要时提供自定义复数词。
- 如果第一个参数是一个对象，则返回一个函数，该函数可以使用提供的字典来解析单词的正确复数形式。

```js
const pluralize = (val, word, plural = word + 's') => {
  const _pluralize = (num, word, plural = word + 's') =>
    [1, -1].includes(Number(num)) ? word : plural;
  if (typeof val === 'object') {
    return (num, word) => _pluralize(num, word, val[word]);
  }
  return _pluralize(val, word, plural);
};
```

<div class="code-editor" data-url="codes/javascript/ts/pluralize.ts" data-language="typescript"></div>

> 调用方式:

```js
pluralize(0, 'apple'); // 'apples'
pluralize(1, 'apple'); // 'apple'
pluralize(2, 'apple'); // 'apples'
pluralize(2, 'person', 'people'); // 'people'

const PLURALS = {
  person: 'people',
  radius: 'radii'
};
const autoPluralize = pluralize(PLURALS);
autoPluralize(2, 'person'); // 'people'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/pluralize.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/pluralize.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/pluralize.html"></iframe>