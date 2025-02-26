type ComposeFn = (...args: any[]) => any;

const compose = <T extends ComposeFn[]>(...handlers: T) =>
    handlers.reduce(
        (f, h) =>
            (...args: Parameters<T[0]>) => f(h(...args))
    );

const add5 = (x: number) => x + 5;
const multiply = (x: number, y: number) => x * y;
const multiplyAndAdd5 = compose(add5, multiply);
multiplyAndAdd5(5, 2); // 15