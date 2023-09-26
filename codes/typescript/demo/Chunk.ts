type Chunk<
    T extends any[],
    N extends number = 1,
    S extends any[] = []
> = S['length'] extends N
    ? [S, ...Chunk<T, N>]
    : T extends [infer F, ...infer R]
    ? Chunk<R, N, [...S, F]>
    : S extends []
    ? S
    : [S];
type expChunk1 = Chunk<[1, 2, 3], 2> // expected to be [[1, 2], [3]]
type expChunk2 = Chunk<[1, 2, 3], 4> // expected to be [[1, 2, 3]]
type expChunk3 = Chunk<[1, 2, 3], 1> // expected to be [[1], [2], [3]]