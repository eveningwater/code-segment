type SelectReadonly<T, K extends keyof T = keyof T> = {
  readonly [R in K]: T[R];
} & {
  [R in Exclude<keyof T, K>]: T[R];
};
interface SelectReadonlyTodo {
  title: string;
  description: string;
  completed: boolean;
}

const selectReadonlyTodo: SelectReadonly<
  SelectReadonlyTodo,
  'title' | 'description'
> = {
  title: 'Hey',
  description: 'foobar',
  completed: false
};

selectReadonlyTodo.title = 'Hello'; // Error: cannot reassign a readonly property
selectReadonlyTodo.description = 'barFoo'; // Error: cannot reassign a readonly property
selectReadonlyTodo.completed = true; // OK
