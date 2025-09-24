// 定义支持的数据类型
type SupportedData = 
    | string 
    | number 
    | boolean 
    | null 
    | undefined 
    | ArrayBuffer 
    | Uint8Array 
    | Blob 
    | object 
    | Array<unknown>;

// 定义流控制器类型
type StreamController = ReadableStreamDefaultController<Uint8Array>;

// 定义异步函数类型
type AsyncDataProvider = () => Promise<Uint8Array>;

/**
 * 将任意类型数据转换为可读流
 * @param data 要转换的数据
 * @returns ReadableStream<Uint8Array> 可读流
 */
const anyDataToReadableStream = <T extends SupportedData>(data: T): ReadableStream<Uint8Array> => {
    const encoder = new TextEncoder();
    
    // 创建同步流的通用函数
    const createSyncStream = (streamData: Uint8Array): ReadableStream<Uint8Array> => {
        return new ReadableStream<Uint8Array>({
            start(controller: StreamController) {
                controller.enqueue(streamData);
                controller.close();
            }
        });
    };
    
    // 创建异步流的通用函数
    const createAsyncStream = (asyncFn: AsyncDataProvider): ReadableStream<Uint8Array> => {
        return new ReadableStream<Uint8Array>({
            async start(controller: StreamController) {
                try {
                    const streamData = await asyncFn();
                    controller.enqueue(streamData);
                    controller.close();
                } catch (error) {
                    controller.error(error);
                }
            }
        });
    };
    
    // 处理 null 和 undefined
    if (data === null || data === undefined) {
        return createSyncStream(encoder.encode('null'));
    }
    
    // 处理字符串
    if (typeof data === 'string') {
        return createSyncStream(encoder.encode(data));
    }
    
    // 处理 ArrayBuffer
    if (data instanceof ArrayBuffer) {
        return createSyncStream(new Uint8Array(data));
    }
    
    // 处理 Uint8Array
    if (data instanceof Uint8Array) {
        return createSyncStream(data);
    }
    
    // 处理 Blob（异步）
    if (data instanceof Blob) {
        return createAsyncStream(async (): Promise<Uint8Array> => {
            const arrayBuffer = await data.arrayBuffer();
            return new Uint8Array(arrayBuffer);
        });
    }
    
    // 处理其他类型（对象、数组、数字、布尔值等）
    try {
        const jsonString = JSON.stringify(data);
        return createSyncStream(encoder.encode(jsonString));
    } catch (error) {
        // 处理循环引用等 JSON.stringify 失败的情况
        const errorMessage = `[Circular Reference: ${(data as object).constructor?.name || 'Object'}]`;
        return createSyncStream(encoder.encode(errorMessage));
    }
};

anyDataToReadableStream('hello'); // ReadableStream<Uint8Array>