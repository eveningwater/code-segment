type DeepReadonly<T> = keyof T extends never
  ? T
  : {
      readonly [P in keyof T]: DeepReadonly<T[P]>;
    };
type DeepReadonlyX = {
  x: {
    a: 1;
    b: 'hi';
  };
  y: 'hey';
};

type DeepReadonlyExpected = {
  readonly x: {
    readonly a: 1;
    readonly b: 'hi';
  };
  readonly y: 'hey';
};

type DeepReadonlyTodo = DeepReadonly<DeepReadonlyX>; // should be same as `DeepReadonlyExpected`
