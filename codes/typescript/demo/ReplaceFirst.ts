type ReplaceFirst<T extends any[], S, U> = T extends [infer F, ...infer R]
    ? F extends S
    ? [U, ...R]
    : [F, ...ReplaceFirst<R, S, U>]
    : T;


type ReplaceFirstRes1 = ReplaceFirst<[1, 2, 3], 3, 4> // [1, 2, 4]
type ReplaceFirstRes2 = ReplaceFirst<['A', 'B', 'C'], 'C', 'D'> // ['A', 'B', 'D']
type ReplaceFirstRes3 = ReplaceFirst<[true, true, true], true, false> // [false, true, true]
type ReplaceFirstRes4 = ReplaceFirst<[string, boolean, number], boolean, string> // [string, string, number]
type ReplaceFirstRes5 = ReplaceFirst<[1, 'two', 3], string, 2> // [1, 2, 3]
type ReplaceFirstRes6 = ReplaceFirst<['six', 'eight', 'ten'], 'eleven', 'twelve'> // ['six', 'eight', 'ten']
