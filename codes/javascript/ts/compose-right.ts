type ComposeRightFn<T extends any> = (...args: T[]) => T;
const composeRight = <T, U extends ComposeRightFn<T>[]>(...handlers: U) =>
    handlers.reduce(
        (f, h) =>
            (...args: Parameters<ComposeRightFn<T>>) =>
                h(f(...args))
    );

const add = (x: number, y: number) => x + y;
const square = (x: number) => x * x;
const addAndSquare = composeRight<number,ComposeRightFn<number>[]>(add, square);
addAndSquare(1, 2); // 9