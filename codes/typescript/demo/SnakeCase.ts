type SnakeCase<T extends string> = T extends `${infer F}${infer R}`
    ? Uppercase<F> extends F
    ? `_${Lowercase<F>}${SnakeCase<R>}`
    : `${F}${SnakeCase<R>}`
    : '';
type SnakeCaseRes1 = SnakeCase<'hello'>; // 'hello'
type SnakeCaseRes2 = SnakeCase<'userName'>; // 'user_name'
type SnakeCaseRes3 = SnakeCase<'getElementById'>; // 'get_element_by_id'
type SnakeCaseRes4 = SnakeCase<'getElementById' | 'getElementByClassNames'>; // 'get_element_by_id' | 'get_element_by_class_names'