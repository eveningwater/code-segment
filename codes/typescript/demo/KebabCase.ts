type KebabCase<S extends string> = S extends `${infer F}${infer R}` ? R extends Uncapitalize<R> ? `${Uncapitalize<F>}${KebabCase<R>}` : `${Uncapitalize<F>}-${KebabCase<R>}` : S;
type KebabCaseFooBarBaz = KebabCase<"FooBarBaz">
const keFooBarBaz: KebabCaseFooBarBaz = "foo-bar-baz"

type KebabCaseDoNothing = KebabCase<"do-nothing">
const keDoNothing: KebabCaseDoNothing = "do-nothing"