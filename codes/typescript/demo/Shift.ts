type Shift<T extends any[]> = T extends [any, ...infer R] ? [...R] : T;

type ShiftResult = Shift<[3, 2, 1]> // [2, 1]