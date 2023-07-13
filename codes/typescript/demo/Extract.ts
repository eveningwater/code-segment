// @ts-ignore
type Extract<T, U> = T extends U ? T : never;

type ExtractA = string | boolean | number;
type ExtractB = string;
type ExtractC = Extract<ExtractA, ExtractB>; // string;

type ExtractD = string | number;
type ExtractE = Extract<ExtractD, number>; // number

type ExtractF = Extract<ExtractD, string | number>; // string | number
type ExtractG = Extract<ExtractA, string & number>; // never
