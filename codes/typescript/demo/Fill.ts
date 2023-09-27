type Fill<T extends any[],
    N,
    S extends number = 0,
    E extends number = T['length'],
    C extends number[] = [],
    B extends boolean = C['length'] extends S ? true : false>
    =
    C['length'] extends E ? T : T extends [infer F, ...infer R] ? B extends false ? [F, ...Fill<R, N, S, E, [...C, 0]>] : [N, ...Fill<R, N, S, E, [...C, 0], B>] : T;

type expFill1 = Fill<[1, 2, 3], 0> // expected to be [0, 0, 0]
type expFill2 = Fill<[], 0>; // expected to be []
type expFill3 = Fill<[], 0, 0, 3>; // expected to be []
type expFill4 = Fill<[1, 2, 3], 0, 0, 0>; // expected to be [1,2,3]
type expFill5 = Fill<[1, 2, 3], 0, 2, 2>; // expected to be [1,2,3]
type expFill6 = Fill<[1, 2, 3], 0>; // expected to be [0,0,0]
type expFill7 = Fill<[1, 2, 3], true>; // expected to be [true,true,true]
type expFill8 = Fill<[1, 2, 3], true, 0, 1>; // expected to be [true,2,3]
type expFill9 = Fill<[1, 2, 3], true, 1, 3>; // expected to be [1,true,true]
type expFill10 = Fill<[1, 2, 3], true, 10, 0>; // expected to be [1,2,3]
type expFill11 = Fill<[1, 2, 3], true, 10, 20>; // expected to be [1,2,3]
type expFill12 = Fill<[1, 2, 3], true, 0, 10>; // expected to be [true,true,true]