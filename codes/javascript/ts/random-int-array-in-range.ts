const randomIntArrayInRange = (min: number, max: number, n = 1) =>
    Array.from(
        { length: n },
        () => Math.floor(Math.random() * (max - min + 1)) + min
    );

randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]