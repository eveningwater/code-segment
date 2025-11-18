const median = <T extends number>(arr: T[]) => {
  const mid = Math.floor(arr.length / 2),
    newArr = arr.sort((a, b) => a - b);
  return arr.length % 2 !== 0
    ? newArr[mid]
    : (newArr[mid - 1] + newArr[mid]) / 2;
};

median([5, 6, 50, 1, -5]); // 5
