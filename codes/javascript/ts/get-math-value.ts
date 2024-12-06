const getMathValue = <T extends unknown>(...args: T[]) => {
    const formatArgs = args.reduce<number[]>((res, item) => {
        const n = Number(item);
        if (typeof n === 'number' && !isNaN(n)) {
            res.push(n);
        }
        return res;
    }, []);
    // 创建一个对象返回结果
    const result = {
        sum: 0,
        max: 0,
        min: 0,
        average: 0
    },
        len = formatArgs.length;
    // 暂定第一个参数就是最大值与最小值
    result['max'] = formatArgs[0];
    result['min'] = formatArgs[0];
    for (let i = 0; i < len; i++) {
        // 求和
        result['sum'] += formatArgs[i];
        // 最大值
        if (formatArgs[i] > result['max']) result['max'] = formatArgs[i];
        // 最小值
        if (formatArgs[i] < result['min']) result['min'] = formatArgs[i];
    }
    // 平均数
    result['average'] = result['sum'] / len;
    return result;
};

getMathValue(1, 2, 3, null) //{ sum:6,max:3,min:1,average:2}