const getArrayDepth = <T>(arr:T) => {
    if (!Array.isArray(arr)) {
      return 0;
    }
    if (arr.length === 0) {
      return 1;
    }
    let maxDepth = 1;
    for (let i = 0; i < arr.length; i++) {
      const depth = getArrayDepth(arr[i]);
      maxDepth = Math.max(maxDepth, depth + 1);
    }
    return maxDepth;
}

getArrayDepth([1,2,3]); // 1
getArrayDepth([1,2,3,[1,2,3]]); // 2