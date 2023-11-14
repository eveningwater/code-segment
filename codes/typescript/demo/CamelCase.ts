type IsGap<T extends string> = Uppercase<T> extends Lowercase<T> ? true : false
type CamelCase<S extends string> = S extends Lowercase<S>
    ? S extends `${infer L}_${infer M}${infer R}`
    ? M extends '_'
    ? `${L}_${CamelCase<`_${R}`>}`
    : `${L}${IsGap<M> extends true
    ? `_${M}`
    : Uppercase<M>}${CamelCase<R>}`
    : S
    : CamelCase<Lowercase<S>>;

type CamelCaseRes1 = CamelCase<'foobar'>; //  'foobar'
type CamelCaseRes2 = CamelCase<'FOOBAR'>; //  'foobar'
type CamelCaseRes3 = CamelCase<'foo_bar'>; //  'fooBar'
type CamelCaseRes4 = CamelCase<'foo__bar'>; //  'foo_Bar'
type CamelCaseRes5 = CamelCase<'foo_$bar'>; //  'foo_$bar'
type CamelCaseRes6 = CamelCase<'foo_bar_'>; //  'fooBar_'
type CamelCaseRes7 = CamelCase<'foo_bar__'>; //  'fooBar__'
type CamelCaseRes8 = CamelCase<'foo_bar_$'>; //  'fooBar_$'
type CamelCaseRes9 = CamelCase<'foo_bar_hello_world'>; //  'fooBarHelloWorld'
type CamelCaseRes10 = CamelCase<'HELLO_WORLD_WITH_TYPES'>; //  'helloWorldWithTypes'
type CamelCaseRes11 = CamelCase<'-'>; //  '-'
type CamelCaseRes12 = CamelCase<''>; //  ''
type CamelCaseRes13 = CamelCase<'😎'>; //  '😎'