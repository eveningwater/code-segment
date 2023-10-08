type Subsequence<
    T extends any[],
    S extends any[] = []
> = T extends [infer F, ...infer R] ? Subsequence<R, S | [...S, F]> : S;

type SubsequenceRes1 = Subsequence<[1, 2]> // [] | [1] | [2] | [1, 2]
type SubsequenceRes2 = Subsequence<[1, 2, 3]> // [] | [1] | [2] | [1, 2] | [3] | [1, 3] | [2, 3] | [1, 2, 3]