type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer A}` ? A : T;
type AbsoluteTest = -100;
type AbsoluteResult = Absolute<AbsoluteTest> // expected to be "100"