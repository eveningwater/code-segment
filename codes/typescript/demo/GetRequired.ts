type GetRequired<T> = {
    [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K];
};

type GetRequiredRes1 = GetRequired<{ foo: number; bar?: string }>; // { foo: number }
type GetRequiredRes2 = GetRequired<{ foo: undefined; bar?: undefined }>; // { foo: undefined }