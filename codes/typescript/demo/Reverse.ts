type Reverse<T extends any[]> = T extends [infer F, ...infer R]
    ? [...Reverse<R>, F]
    : T;
type aReverse = Reverse<['a', 'b']> // ['b', 'a']
type bReverse = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']