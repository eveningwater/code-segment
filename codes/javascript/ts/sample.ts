const sample = <T>(arr: T[] | string) => arr[Math.floor(Math.random() * arr.length)];

sample([3, 7, 9, 11]); // 9
sample<string>('12345'); // 3