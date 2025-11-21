const mergeSort = (arr: number[]) => {
  if (!Array.isArray(arr) || arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2),
    l = mergeSort(arr.slice(0, mid)),
    r = mergeSort(arr.slice(mid, arr.length));
  return Array.from({ length: l.length + r.length }, () => {
    if (!l.length) {
      return r.shift();
    } else if (!r.length) {
      return l.shift();
    } else {
      return l[0] > r[0] ? r.shift() : l.shift();
    }
  });
};

mergeSort([5, 1, 4, 2, 3]); // [1, 2, 3, 4, 5]
