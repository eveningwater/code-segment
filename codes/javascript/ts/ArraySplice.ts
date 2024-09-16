interface Array<T> {
    ArraySplice(start: number, deleteCount: number,...rest: unknown[]): T[];
}
Array.prototype.ArraySplice = function (start, deleteCount) {
    var max = Math.max, //最大值
        min = Math.min, //最小值
        len = this.length, //当前数组长度
        insertIndex = max(arguments.length - 2, 0), //插入索引
        k = 0, //循环值
        new_len: number, //新数组长度
        result: unknown[] = [], //最终结果
        delta: number, //插入的索引值
        element: unknown, //数组每一项
        shift_count: number; //从删除开始的截取索引
    start = start || 0;
    // 当开始索引小于0时，与长度相加
    if (start < 0) start += len;
    //开始索引值的一个取值范围
    start = max(min(start, len), 0);
    // 删除数组项的一个取值范围
    deleteCount = max(
        min(typeof deleteCount === 'number' ? deleteCount : len, len - start),
        0
    );
    // 插入索引值
    delta = insertIndex - deleteCount;
    // 新的长度
    new_len = len + delta;
    // 从开始索引到删除数组项数开始截取
    while (k < deleteCount) {
        element = this[start + k];
        if (element !== undefined) result[k] = element;
        k += 1;
    }
    shift_count = len - start - deleteCount;
    // 如果插入索引值不为0
    if (delta < 0 || delta > 0) {
        k = delta < 0 ? start + insertIndex : 1;
        while (shift_count) {
            this[delta < 0 ? k : new_len - k] = this[delta < 0 ? k - delta : len - k];
            k += 1;
            shift_count -= 1;
        }
        this.length = new_len;
    }
    for (k = 0; k < insertIndex; k++) {
        this[start + k] = arguments[k + 2];
    }
    return result;
};


const notProArraySplice = <T extends unknown>(arr: T[], start: number, deleteCount: number, ...rest: unknown[]) => {
    const arguments = [arr, start, deleteCount, ...rest];
    let max = Math.max, //最大值
        min = Math.min, //最小值
        len = arr.length, //当前数组长度
        insertIndex = max(arguments.length - 2 + 3, 0), //插入索引
        k = 0, //循环值
        new_len: number, //新数组长度
        result: unknown[] = [], //最终结果
        delta: number, //插入的索引值
        element: unknown, //数组每一项
        shift_count: number; //从删除开始的截取索引
    start = start || 0;
    // 当开始索引小于0时，与长度相加
    if (start < 0) start += len;
    //开始索引值的一个取值范围
    start = max(min(start, len), 0);
    // 删除数组项的一个取值范围
    deleteCount = max(
        min(typeof deleteCount === 'number' ? deleteCount : len, len - start),
        0
    );
    // 插入索引值
    delta = insertIndex - deleteCount;
    // 新的长度
    new_len = len + delta;
    // 从开始索引到删除数组项数开始截取
    while (k < deleteCount) {
        element = arr[start + k];
        if (element !== undefined) result[k] = element;
        k += 1;
    }
    shift_count = len - start - deleteCount;
    // 如果插入索引值不为0
    if (delta < 0 || delta > 0) {
        k = delta < 0 ? start + insertIndex : 1;
        while (shift_count) {
            arr[delta < 0 ? k : new_len - k] = arr[delta < 0 ? k - delta : len - k];
            k += 1;
            shift_count -= 1;
        }
        arr.length = new_len;
    }
    for (k = 0; k < insertIndex; k++) {
        arr[start + k] = arguments[k + 2] as T;
    }
    return result;
}

const arr = [1, 2, 3];
arr.ArraySplice(0, 1, [1, 2]); //[1]
console.log(arr); //[[1,2],2,3]
const arr1 = [1,2,3];
notProArraySplice(arr1, 0, 1, [1, 2]); //[1]
console.log(arr1); //[[1,2],2,3]