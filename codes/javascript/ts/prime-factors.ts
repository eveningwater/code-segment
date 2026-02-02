const primeFactors = (n: number) => {
  const a = [];
  let f = 2;
  while (n > 1) {
    if (n % f === 0) {
      a.push(f);
      n /= f;
    } else {
      f++;
    }
  }
  return a;
};

primeFactors(147); // [3, 7, 7]