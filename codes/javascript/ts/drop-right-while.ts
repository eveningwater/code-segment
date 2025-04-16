const dropRightWhile = <T>(arr: T[], handler: (v: T) => boolean) => {
  let rightIndex = arr.length;
  while (rightIndex-- && !handler(arr[rightIndex]));
  return arr.slice(0, rightIndex);
};

dropRightWhile([1, 2, 3, 4], (n) => n < 3); // [1, 2]
