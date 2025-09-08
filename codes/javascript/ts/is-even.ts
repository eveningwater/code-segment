const isEven = (num: number) => num % 2 === 0;

const isEven1 = (num: number) => (num & 1) === 0;

isEven(3); // false