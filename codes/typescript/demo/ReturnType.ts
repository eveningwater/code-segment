type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer A
  ? A
  : never;
const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type ReturnTypeFnValue = MyReturnType<typeof fn>; // should be "1 | 2"
