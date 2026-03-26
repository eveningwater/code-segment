const shank = <T, U extends T>(arr: T[], index = 0, delCount = 0, ...elements: U[]) =>
    arr
        .slice(0, index)
        .concat(elements)
        .concat(arr.slice(index + delCount));

const names = ['alpha', 'bravo', 'charlie'];
const namesAndDelta = shank(names, 1, 0, 'delta');
// [ 'alpha', 'delta', 'bravo', 'charlie' ]
const namesNoBravo = shank(names, 1, 1); // [ 'alpha', 'charlie' ]
console.log(names); // ['alpha', 'bravo', 'charlie']