// @ts-ignore
type Exclude<T, U> = T extends U ? never : T;
type ExcludeA = string | boolean | number;
type ExcludeB = string;
type ExcludeC = Exclude<ExcludeA, ExcludeB>;
type ExcludeD = string | number;
type ExcludeE = Exclude<ExcludeD, number>;
type ExcludeF = Exclude<ExcludeD, string | number>;
