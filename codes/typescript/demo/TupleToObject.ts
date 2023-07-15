// type PropertyKey = string | number | symbol;
type TupleToObject<T extends readonly PropertyKey[]> = {
  [R in T[number]]: R;
};
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type result = TupleToObject<typeof tuple>; // { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
