const findLastN = <T>(
  arr: T[],
  matcher: (el: T, i: number, arr: T[]) => boolean,
  n = 1
) => {
  const res: T[] = [];
  for (let i = arr.length - 1; i > 0; i--) {
    const el = arr[i];
    const match = matcher(el, i, arr);
    if (match) {
      res.unshift(el);
    }
    if (res.length === n) {
      return res;
    }
  }
  return res;
};

findLastN([1, 2, 4, 6], (n) => n % 2 === 0, 2); // [4, 6]
findLastN([1, 2, 4, 6], (n) => n % 2 === 0, 5); // [2, 4, 6]
