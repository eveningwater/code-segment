const cycleGenerator = function* <T>(arr: T[] | string) {
    let i = 0;
    while (true) {
        yield arr[i % arr.length];
        i++;
    }
};

const binaryCycle = cycleGenerator([0, 1]);
binaryCycle.next(); // { value: 0, done: false }
binaryCycle.next(); // { value: 1, done: false }
binaryCycle.next(); // { value: 0, done: false }
binaryCycle.next(); // { value: 1, done: false }