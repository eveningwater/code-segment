const rearg =
    <T>(fn: (...args: T[]) => T[], indexes: number[]) =>
        (...args: T[]) =>
            fn(...indexes.map(i => args[i]));

type ReargedFn<T> = (...args: T[]) => T[];
var rearged: ReargedFn<string> = rearg(
    function (a, b, c) {
        return [a, b, c];
    },
    [2, 0, 1]
);
rearged('b', 'c', 'a'); // ['a', 'b', 'c']