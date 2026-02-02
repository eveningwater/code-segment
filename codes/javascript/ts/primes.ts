const primes = (num:number) => {
  let arr = Array.from({ length: num - 1 }).map((x, i) => i + 2),
    sqrtRoot = Math.floor(Math.sqrt(num)),
    arrTillSqrRoot = Array.from({ length: sqrtRoot - 1 }).map((x, i) => i + 2);
  arrTillSqrRoot.forEach(x => (arr = arr.filter(y => y === x || y % x !== 0)));
  return arr;
};

primes(10); // [2, 3, 5, 7]