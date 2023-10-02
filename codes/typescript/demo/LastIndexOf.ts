type LastIndexOf<T extends any[], S> = T extends [...infer R, infer T] ? (
    (<V>() => V extends T ? 1 : 0) extends (<V>() => V extends S ? 1 : 0) ? R['length'] : LastIndexOf<R, S>
) : -1;

type ResLastIndexOf1 = LastIndexOf<[1, 2, 3, 2, 1], 2> // 3
type ResLastIndexOf2 = LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3> // 7
type ResLastIndexOf4 = LastIndexOf<[string, 2, number, 'a', number, 1], number> // 4
type ResLastIndexOf5 = LastIndexOf<[string, any, 1, number, 'a', any, 1], any> // 5
type ResLastIndexOf6 = LastIndexOf<[1, 2, 3, 2, 1], 2> // 3
type ResLastIndexOf7 = LastIndexOf<[0, 0, 0], 2> // -1