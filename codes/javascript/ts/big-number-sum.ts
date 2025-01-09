const bigNumberSum = (a: string, b: string) => {
    // 超大数字一定是用一个字符串表示
    // 实现原理，利用满十进一，将字符串分隔成一个数组，即每一位对应相加，满十就进1
    let aArr = a.split(''), bArr = b.split('');
    // 取两个数组之间最大长度
    const maxLen = Math.max(aArr.length, bArr.length);
    let flag = false, res: number[] = [];
    for (let i = 0; i < maxLen; i++) {
        const nPopA = aArr.pop(),
            nPopB = bArr.pop(),
            numA = parseInt(`${nPopA ? nPopA : 0}`),
            numB = parseInt(`${nPopB ? nPopB : 0}`),
            unit = flag ? numA + numB + 1 : numA + numB;
        // 如果相加大于了10，则向前进10的倍数，如6 + 5等于11则向前进一，满足满十进一的原则
        if (parseInt(`${unit / 10}`) > 0) {
            res.push(unit % 10);
            flag = true;
        } else {
            res.push(unit);
            flag = false;
        }
        // 当相加到第一位，则判断是否相加大于10，大于10则向前进1
        if (flag && i === maxLen - 1) {
            res.push(1);
        }
    }
    // 由于是用的pop方法，从最后一个删除的，因此要reverse调换下顺序，如果用shift方法的话，则不用调用reverse
    return res.reverse().join('');
}

bigNumberSum(
    '13253244444444444444444445253453',
    '2352378527582738592783562385'
);
//13255596822972027183037228815838