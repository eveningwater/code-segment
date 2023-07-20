type Concat<T extends readonly unknown[], U extends readonly unknown[]> = [
  ...T,
  ...U
];
type Result = Concat<[1], [2]>;
