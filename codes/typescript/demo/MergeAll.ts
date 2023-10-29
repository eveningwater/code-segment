type MergeAll<T extends Record<string, unknown>[], Res = {}> = T extends [
    infer F,
    ...infer R extends Record<string, unknown>[]
]
    ? MergeAll<
        R,
        Omit<Res, keyof F> & {
            [P in keyof F]: P extends keyof Res ? F[P] | Res[P] : F[P];
        }
    >
    : Omit<Res, never>;

type MergeAllRes1 = MergeAll<[]>; // {}
type MergeAllRes2 = MergeAll<[{ a: 1 }]>; // { a: 1 }
type MergeAllRes3 = MergeAll<[{ a: string }, { a: string }]>; // { a: string }
type MergeAllRes4 = MergeAll<[{}, { a: string }]>; //{ a: string }
type MergeAllRes5 = MergeAll<[{ a: 1 }, { c: 2 }]>; // { a: 1; c: 2 }
type MergeAllRes6 = MergeAll<[{ a: 1; b: 2 }, { a: 2 }, { c: 3 }]>; // { a: 1 | 2; b: 2; c: 3 }
type MergeAllRes7 = MergeAll<[{ a: 1 }, { a: number }]>; // { a: number }
type MergeAllRes8 = MergeAll<[{ a: number }, { a: 1 }]>; // { a: number }
type MergeAllRes9 = MergeAll<[{ a: 1 | 2 }, { a: 1 | 3 }]>; // { a: 1 | 2 | 3 }