type ComposeFn<T extends any> = (...args: T[]) => T;

const compose = <T,U extends ComposeFn<T>[]>(...handlers: U) =>
    handlers.reduce(
        (f, h) =>
            (...args: Parameters<ComposeFn<T>>) => f(h(...args))
    );

const add5 = (x: number) => x + 5;
const multiply = (x: number, y: number) => x * y;
const multiplyAndAdd5 = compose<number, ComposeFn<number>[]>(add5, multiply);
multiplyAndAdd5(5, 2); // 15