type Push<T extends unknown[], U> = [...T, U];
type PushResult = Push<[1, 2], '3'>; // [1, 2, '3']
