type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
interface OmitTodo {
  title: string;
  description: string;
  completed: boolean;
}

type OmitTodoPreview = MyOmit<OmitTodo, 'description' | 'title'>;

const omitTodo: OmitTodoPreview = {
  completed: false
};
