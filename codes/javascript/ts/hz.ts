const hz = (handler: () => void, iterations = 100) => {
    const before = performance.now();
    for (let i = 0; i < iterations; i++) {
        handler();
    }
    return (1000 * iterations) / (performance.now() - before);
};

const numbers = Array(10000)
    .fill(0)
    .map((_, i) => i);

const sumReduce = () => numbers.reduce((acc, n) => acc + n, 0);
const sumForLoop = () => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    return sum;
};

Math.round(hz(sumReduce)); // 572
Math.round(hz(sumForLoop)); // 4784