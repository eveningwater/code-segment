const reverseNumber = (n: number) =>
  parseFloat(`${n}`.split('').reverse().join('')) * Math.sign(n);

reverseNumber(981); // 189
reverseNumber(-500); // -5
reverseNumber(73.6); // 6.37
reverseNumber(-5.23); // -32.5