type BindFunction<T extends (...args: any[]) => any> = (
    handler: T,
    context: unknown,
    ...bindArgs: Parameters<T>
) => (...args: Parameters<T>) => ReturnType<T>;
const bind =
    <T,U,C,D>(handler: (...args: T[]) => U, context:C, ...bindArgs:D[]) =>
        <X>(...args:X[]) =>
            handler.apply(context, [...bindArgs, ...args]);

function greet(greeting: string, punctuation: string) {
    return greeting + ' ' + this.user + punctuation;
}
const freddy = { user: 'fred' };
const freddyBound = bind(greet, freddy);
console.log(freddyBound('hi', '!')); // 'hi fred!'