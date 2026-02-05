const pullAtIndex = <T>(arr:T[], pullArr:number[]) => {
  let removed:T[] = [];
  let pulled = arr
    .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
    .filter((v, i) => !pullArr.includes(i));
  arr.length = 0;
  pulled.forEach(v => arr.push(v as T));
  return removed;
};

let myArray = ['a', 'b', 'c', 'd'];
let pulled = pullAtIndex(myArray, [1, 3]);
// myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]