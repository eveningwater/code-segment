const nonrandom = <T>(...args: T[]) => {
    let num = args;
    if (Array.isArray(num[0])) {
        num = num[0];
    }
    let maxNum = parseInt(`${num[0]}`) || 10,
        minNum = parseInt(`${num[1]}`) || 1;
    if (minNum === maxNum) {
        return maxNum;
    }
    minNum > maxNum ? ([minNum, maxNum] = [maxNum, minNum]) : '';
    const randomArr: number[] = [];
    for (let i = minNum; i <= maxNum; i++) {
        randomArr.push(i);
    }
    let index = randomArr.length;
    while (index) {
        const r = Math.floor(Math.random() * index--);
        [randomArr[r], randomArr[index]] = [randomArr[index], randomArr[r]];
    }
    return randomArr;
}

// 可能不一定是注释的结果，具体应该是随机的
nonrandom(); // [9, 7, 8, 4, 6, 1, 5, 2, 10, 3]
nonrandom(7); // [2, 7, 3, 1, 6, 4, 5]
nonrandom(8, 16); // [16, 15, 11, 10, 13, 9, 14, 12, 8]
nonrandom(['5', '13']); // [9, 10, 5, 11, 12, 13, 7, 6, 8]