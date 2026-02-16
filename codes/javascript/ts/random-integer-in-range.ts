const randomIntegerInRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

randomIntegerInRange(0, 5); // 2