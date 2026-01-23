const pipeFunctions = (...fns: Array<(...args: any[]) => any>) =>
  fns.reduce(
    (f, g) =>
      (...args: any[]) =>
        g(f(...args)),
  );

const add5 = (x: number) => x + 5;
const multiply = (x: number, y: number) => x * y;
const multiplyAndAdd5 = pipeFunctions(multiply, add5);
multiplyAndAdd5(5, 2); // 15
