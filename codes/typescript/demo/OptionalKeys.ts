type OptionalKeys<T> = keyof {
    [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K];
};

type OptionalKeysRes1 = OptionalKeys<{ a: number; b?: string }> // 'b'
type OptionalKeysRes2 = OptionalKeys<{ a: undefined; b?: undefined }> // 'b'
type OptionalKeysRes3 = OptionalKeys<{ a: undefined; b?: undefined; c?: string; d?: null }> // 'b' | 'c' | 'd'
type OptionalKeysRes4 = OptionalKeys<{}> // never