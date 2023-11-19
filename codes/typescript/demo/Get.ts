
type Get<T, K> = K extends keyof T
    ? T[K]
    : K extends `${infer F}.${infer R}`
    ? F extends keyof T
    ? Get<T[F], R>
    : never
    : never;

type Data = {
    foo: {
        bar: {
            value: 'foobar'
            count: 6
        }
        included: true
    }
    'foo.baz': false
    hello: 'world'
}

type GetRes1 = Get<Data, 'hello'> //  'world'
type GetRes2 = Get<Data, 'foo.bar.count'> //  6
type GetRes3 = Get<Data, 'foo.bar'> //  { value: 'foobar'; count: 6 }
type GetRes4 = Get<Data, 'foo.baz'> //  false
type GetRes5 = Get<Data, 'no.existed'> //  never
