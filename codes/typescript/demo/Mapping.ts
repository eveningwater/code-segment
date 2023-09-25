

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
    k: infer I
) => void
    ? I
    : never;
type UnionToOvlds<U> = UnionToIntersection<
    U extends any ? (f: U) => void : never
>;
type PopUnion<U> = UnionToOvlds<U> extends (a: infer A) => void ? A : never;
type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true;
type UnionToArray<T, A extends unknown[] = []> = IsUnion<T> extends true
    ? UnionToArray<Exclude<T, PopUnion<T>>, [PopUnion<T>, ...A]>
    : [T, ...A];
type Length<T extends ReadonlyArray<any>> = T extends { length: infer L }
    ? L
    : never;
type CompareLength<
    X extends ReadonlyArray<any>,
    Y extends ReadonlyArray<any>
> = Length<X> extends Length<Y> ? true : false;
type Callback<T, U> = T extends PropertyKey ? U extends PropertyKey ? Record<T, U> : never : never
type Zip<
    T extends ReadonlyArray<any>,
    U extends ReadonlyArray<any>,
    Result extends Record<string, any> = {}> =
    (CompareLength<T, U> extends true
        ? (T extends []
            ? Result
            : (T extends [infer HeadT1]
                ? (U extends [infer HeadU1]
                    ? Result & Callback<HeadT1, HeadU1>
                    : never)
                : (T extends [infer HeadT2, ...infer TailT2]
                    ? (U extends [infer HeadU2, ...infer TailU2]
                        ? Zip<TailT2, TailU2, Result & Callback<HeadT2, HeadU2>>
                        : never)
                    : never
                )
            )
        )
        : never);
type ToObj<T> = {
    [K in keyof T]: T[K]
}
type Union = 'mon' | 'Tue' | 'Wed';
type Mapping<T extends Union, Value extends string> = ToObj<Zip<UnionToArray<T>, UnionToArray<Value>>>
type Res = Mapping<Union, '周一' | '周二' | '周三'>
// type Res = {
//     mon: "周一";
//     Tue: "周二";
//     Wed: "周三";
// }