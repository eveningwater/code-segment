const OperatingSystem = ['macOS', 'Windows', 'Linux'] as const;
const Command = ['echo', 'grep', 'sed', 'awk', 'cut', 'uniq', 'head', 'tail', 'xargs', 'shift'] as const;

/**
 * TupleKeys<[3, 4]> = 0 | 1.
 */
type TupleKeys<T extends readonly unknown[]> = T extends readonly [infer _, ...infer R]
    ? TupleKeys<R> | R['length']
    : never;
type Enum<T extends readonly string[], U extends boolean = false> = {
    readonly [K in TupleKeys<T> as Capitalize<T[K]>]: U extends true ? K : T[K];
};
type EnumRes1 = Enum<[]>; // {}
type EnumRes2 = Enum<typeof OperatingSystem>;
//   {
//     readonly MacOS: 'macOS'
//     readonly Windows: 'Windows'
//     readonly Linux: 'Linux'
//   }
type EnumRes3 = Enum<typeof OperatingSystem, true>;
//   {
//     readonly MacOS: 0
//     readonly Windows: 1
//     readonly Linux: 2
//   }

type EnumRes4 = Enum<typeof Command>;
//   {
//     readonly Echo: 'echo'
//     readonly Grep: 'grep'
//     readonly Sed: 'sed'
//     readonly Awk: 'awk'
//     readonly Cut: 'cut'
//     readonly Uniq: 'uniq'
//     readonly Head: 'head'
//     readonly Tail: 'tail'
//     readonly Xargs: 'xargs'
//     readonly Shift: 'shift'
//   }

type EnumRes5 = Enum<typeof Command, true>;
//   {
//     readonly Echo: 0
//     readonly Grep: 1
//     readonly Sed: 2
//     readonly Awk: 3
//     readonly Cut: 4
//     readonly Uniq: 5
//     readonly Head: 6
//     readonly Tail: 7
//     readonly Xargs: 8
//     readonly Shift: 9
//   }
