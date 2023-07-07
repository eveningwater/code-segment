// @ts-ignore
type Exclude<T,U> = T extends U ? never : T;
type A = string | boolean | number;
type B = string;
type C = Exclude<A,B>;

type D = string | number;
type E = Exclude<D,number>;
type F = Exclude<D,string | number>;
