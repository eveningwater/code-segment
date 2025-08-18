const insertionSort = (arr: number[]): number[] =>
  arr.reduce<number[]>((res, i) => {
    if (!res.length) {
      return [i];
    }
    res.some((j, index) => {
      if (i <= j) {
        res.splice(index, 0, i);
        return true;
      }
      if (i >= j && index === res.length - 1) {
        res.splice(index + 1, 0, i);
        return true;
      }
      return false;
    });
    return res;
  }, []);

insertionSort([6, 3, 4, 1]); // [1, 3, 4, 6]
