const hammingDistance = (a: number, b: number) =>
  ((a ^ b).toString(2).match(/1/g) || "").length;

hammingDistance(2, 3); // 1
