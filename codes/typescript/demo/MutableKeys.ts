type Equal<X, Y> =
    (<T>() => T extends X ? 1 : 2) extends
    (<T>() => T extends Y ? 1 : 2) ? true : false;
type MutableKeys<T> = keyof {
    [K in keyof T as Equal<Pick<T, K>, Readonly<Pick<T, K>>> extends true ? never : K]: any
};
type MutableKeysRes1 = MutableKeys<{ a: number; readonly b: string }>; // 'a'
type MutableKeysRes2 = MutableKeys<{ a: undefined; readonly b: undefined }>; // 'a'
type MutableKeysRes3 = MutableKeys<{ a: undefined; readonly b?: undefined; c: string; d: null }>; // 'a' | 'c' | 'd'
type MutableKeysRes4 = MutableKeys<{}>; // never