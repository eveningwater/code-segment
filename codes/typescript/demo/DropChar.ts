type DropChar<S, M extends string> = S extends `${infer L}${M}${infer R}`
    ? DropChar<`${L}${R}`, M>
    : S;
type Butterfly = DropChar<' b u t t e r f l y ! ', ' '>; // 'butterfly!'