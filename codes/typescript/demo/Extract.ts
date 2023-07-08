// @ts-ignore
type Extract<T, U> = T extends U ? T : never;
type A = string | boolean | number;
type B = string;
type C = Extract<A, B>; // string;

type D = string | number;
type E = Extract<D, number>; // number

type F = Extract<D, string | number>; // string | number
type G = Extract<A, string & number>; // never
