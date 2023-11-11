type RequiredKeys<T> = keyof {
    [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K];
};

type RequiredKeysRes1 = RequiredKeys<{ a: number; b?: string }> //  'a'
type RequiredKeysRes2 = RequiredKeys<{ a: undefined; b?: undefined }> //  'a'
type RequiredKeysRes3 = RequiredKeys<{ a: undefined; b?: undefined; c: string; d: null }> //  'a' | 'c' | 'd'
type RequiredKeysRes4 = RequiredKeys<{}> //  never