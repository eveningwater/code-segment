type InferArrayItem<T> = T extends (infer R) [] ? R : T;

type InferString = InferArrayItem<string []>; // string;
type InferStringOrNumber = InferArrayItem<string | number []>; // string;