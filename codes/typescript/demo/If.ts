type If<C, T, F> = C extends true ? T : F;

type IfA = If<true, 'a', 'b'>; // 'a'
type IfB = If<false, 'a', 'b'>; // 'b'
