type ParseUrlParams<
    T extends string,
    U extends string = never
> = T extends `${string}:${infer S}/${infer R}`
    ? ParseUrlParams<R, S | U>
    : T extends `${string}:${infer S}`
    ? S | U
    : U;

type ParseUrlParamsRes1 = ParseUrlParams<''> //  never
type ParseUrlParamsRes2 = ParseUrlParams<':id'> //  'id'
type ParseUrlParamsRes3 = ParseUrlParams<'posts/:id'> //  'id'
type ParseUrlParamsRes4 = ParseUrlParams<'posts/:id/'> //  'id'
type ParseUrlParamsRes5 = ParseUrlParams<'posts/:id/:user'> //  'id' | 'user'
type ParseUrlParamsRes6 = ParseUrlParams<'posts/:id/:user/like'> //  'id' | 'user'