| 标题                        | 标签                                    |
| --------------------------- | --------------------------------------- |
| anyDataToReadableStream(任意类型数据转换成可读流数据) | data,stream,beginner(数据，流，初学者) |

任意类型数据转换成可读流数据。

- 使用一个res接收转换后参数数据，根据参数数据类型，从而决定如何处理接收后的数据。
- 使用[ReadableStream](https://developer.mozilla.org/zh-CN/docs/Web/API/ReadableStream)构造函数创建可读流数据。

> 代码如下:

```js
const anyDataToReadableStream = (d) => {
    const encoder = new TextEncoder();
    
    // 创建同步流的通用函数
    const createSyncStream = (data) => {
        return new ReadableStream({
            start(controller) {
                controller.enqueue(data);
                controller.close();
            }
        });
    };
    
    // 创建异步流的通用函数
    const createAsyncStream = (asyncFn) => {
        return new ReadableStream({
            async start(controller) {
                try {
                    const data = await asyncFn();
                    controller.enqueue(data);
                    controller.close();
                } catch (error) {
                    controller.error(error);
                }
            }
        });
    };
    
    // 处理 null 和 undefined
    if (d === null || d === undefined) {
        return createSyncStream(encoder.encode('null'));
    }
    
    // 处理字符串
    if (typeof d === 'string') {
        return createSyncStream(encoder.encode(d));
    }
    
    // 处理 ArrayBuffer
    if (d instanceof ArrayBuffer) {
        return createSyncStream(new Uint8Array(d));
    }
    
    // 处理 Uint8Array
    if (d instanceof Uint8Array) {
        return createSyncStream(d);
    }
    
    // 处理 Blob（异步）
    if (d instanceof Blob) {
        return createAsyncStream(async () => {
            const arrayBuffer = await d.arrayBuffer();
            return new Uint8Array(arrayBuffer);
        });
    }
    
    // 处理其他类型（对象、数组、数字、布尔值等）
    try {
        const jsonString = JSON.stringify(d);
        return createSyncStream(encoder.encode(jsonString));
    } catch (error) {
        // 处理循环引用等 JSON.stringify 失败的情况
        const errorMessage = `[Circular Reference: ${d.constructor?.name || 'Object'}]`;
        return createSyncStream(encoder.encode(errorMessage));
    }
}
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/any-data-to-readable-stream.ts" data-language="typescript"></div>

> 调用方式:

```js
anyDataToReadableStream('hello'); // ReadableStream<Uint8Array>
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/any-data-to-readable-stream.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/any-data-to-readable-stream.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/any-data-to-readable-stream.html"></iframe>
