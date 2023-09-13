type TupleToNestedObject<T, U> = T extends [infer F, ...infer R]
    ? {
        [K in F & string]: TupleToNestedObject<R, U>;
    }
    : U;

type aTupleToNestedObject = TupleToNestedObject<['a'], string> // {a: string}
type bTupleToNestedObject = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
type cTupleToNestedObject = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type