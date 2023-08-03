type Pop<T extends any[]> = T extends [...infer Rest, infer _] ? Rest : never;
type popArr1 = ['a', 'b', 'c', 'd'];
type popArr2 = [3, 2, 1];

type PopRe1 = Pop<popArr1>; // expected to be ['a', 'b', 'c']
type PopRe2 = Pop<popArr2>; // expected to be [3, 2]
