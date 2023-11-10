type GetOptional<T> = {
    [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K];
};
type GetOptionalRes1 = GetOptional<{ foo: number; bar?: string }>; //  { bar?: string }
type GetOptionalRes2 = GetOptional<{ foo: undefined; bar?: undefined }>; //  { bar?: undefined }