type NormalFindAll<
    T extends string,
    U extends string,
    P extends number[] = [],
    R extends number[] = []
> = T extends `${string}${infer L}`
    ? T extends `${U}${string}`
    ? NormalFindAll<L, U, [...P, 0], [...R, P['length']]>
    : NormalFindAll<L, U, [...P, 0], R>
    : R;
type FindAll<T extends string, U extends string> = T extends ''
    ? []
    : U extends '' ? [] : NormalFindAll<T, U>;
type FindAllRes1 = FindAll<'Collection of TypeScript type challenges', 'Type'> //  [14]
type FindAllRes2 = FindAll<'Collection of TypeScript type challenges', 'pe'> //  [16, 27]
type FindAllRes3 = FindAll<'Collection of TypeScript type challenges', ''> //  []
type FindAllRes4 = FindAll<'', 'Type'> //  []
type FindAllRes5 = FindAll<'', ''> //  []
type FindAllRes6 = FindAll<'AAAA', 'A'> //  [0, 1, 2, 3]
type FindAllRes7 = FindAll<'AAAA', 'AA'> //  [0, 1, 2]