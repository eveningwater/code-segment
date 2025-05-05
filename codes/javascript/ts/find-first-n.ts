const findFirstN = <T>(
  arr: T[],
  matcher: (v: T, i: string, arr: T[]) => boolean,
  n = 1
) => {
  const res: T[] = [];
  for (const i in arr) {
    const el = arr[i];
    if (matcher(el, i, arr)) {
      res.push(el);
    }
    if (res.length === n) {
      return res;
    }
  }
  return res;
};
findFirstN([1, 2, 4, 6], (n) => n % 2 === 0, 2); // [2, 4]
findFirstN([1, 2, 4, 6], (n) => n % 2 === 0, 5); // [2, 4, 6]
