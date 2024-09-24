const uniqueRegExp = <T>(arr: T[]) =>
    arr
        .sort()
        .join(',,')
        .replace(/(,|^)([^,]+)(,,\2)+(,|$)/g, '$1$2$4')
        .replace(/,,+/g, ',')
        .replace(/,$/, '')
        .split(',');
const uniArr = uniqueRegExp([1, 2, 3, 1]);
// ["1","2","3"]
const numArr = uniArr.map(Number); // [1,2,3]