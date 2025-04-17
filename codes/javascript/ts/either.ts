type EitherCallback<T, U> = (...v: T[]) => U;
const either =
  <T, U>(f: EitherCallback<T, U>, g: EitherCallback<T, U>) =>
  (...args: T[]) =>
    f(...args) || g(...args);

const isEven = (num: number) => num % 2 === 0;
const isPositive = (num: number) => num > 0;
const isPositiveOrEven = either(isPositive, isEven);
isPositiveOrEven(4); // true
isPositiveOrEven(3); // true
