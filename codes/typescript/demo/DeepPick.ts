type TypeGet<T, P> = P extends `${infer A}.${infer B}`
    ? A extends keyof T
    ? { [K in A]: TypeGet<T[A], B> }
    : never
    : P extends keyof T
    ? { [K in P]: T[K] }
    : never;

type UnionToIntersection<U> = (U extends any ? (arg: U) => any : never) extends ((arg: infer I) => any) ? I : never

type DeepPick<T, P extends string> = UnionToIntersection<TypeGet<T, P>>

type Obj = {
    a: number
    b: string
    c: boolean
    obj: {
        d: number
        e: string
        f: boolean
        obj2: {
            g: number
            h: string
            i: boolean
        }
    }
    obj3: {
        j: number
        k: string
        l: boolean
    }
}


type DeepPickRes1 = DeepPick<Obj, ''>; //  unknown
type DeepPickRes2 = DeepPick<Obj, 'a'>; //  { a: number }
type DeepPickRes3 = DeepPick<Obj, 'a' | ''>; //  { a: number } & unknown
type DeepPickRes4 = DeepPick<Obj, 'a' | 'obj.e'>; //  { a: number } & { obj: { e: string } }
type DeepPickRes5 = DeepPick<Obj, 'a' | 'obj.e' | 'obj.obj2.i'>; //  { a: number } & { obj: { e: string } } & { obj: { obj2: { i: boolean } } }
