const heapSort = (arr: number[]) => {
  const copyArr = [...arr];
  let l = copyArr.length;
  // 创建一个最大堆
  const heapify = (data: number[], i: number) => {
    const left = 2 * i + 1,
      right = 2 * i + 2;

    let max = i;
    // 计算最大堆
    if (left < l && data[left] > data[max]) {
      max = left;
    }
    if (right < l && data[right] > data[max]) {
      max = right;
    }

    if (max !== i) {
      // 数组结构交换元素
      [data[max], data[i]] = [data[i], data[max]];
      // 递归
      heapify(data, max);
    }
  };

  for (let i = Math.floor(l / 2); i >= 0; i--) {
    heapify(copyArr, i);
  }
  // 重复缩小范围
  for (let i = copyArr.length - 1; i >= 0; i--) {
    [copyArr[0], copyArr[i]] = [copyArr[i], copyArr[0]];
    l--;
    heapify(copyArr, 0);
  }
  return copyArr;
};

heapSort([6, 3, 4, 1]); // [1, 3, 4, 6]
