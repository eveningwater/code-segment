type TupleToUnion<T> = T extends Array<infer Items> ? Items : never;
type TupleToUnionArr = ['1', '2', '3'];

type TupleToUnionTest = TupleToUnion<TupleToUnionArr>; // expected to be '1' | '2' | '3'
