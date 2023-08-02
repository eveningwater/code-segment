type Last<T extends any[]> = T extends [...infer _, infer L] ? L : never;
type lastArr1 = ['a', 'b', 'c'];
type lastArr2 = [3, 2, 1];

type lastTail1 = Last<lastArr1>; // expected to be 'c'
type lastTail2 = Last<lastArr2>; // expected to be 1
