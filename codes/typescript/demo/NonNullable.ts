// @ts-ignore
type NonNullable<T> = T & {};

type A = null | undefined | string;
type B = NonNullable<A>;