const promisify =
  <T extends any[], U>(func: (...args: [...T, (err: any, result: U) => void]) => any) =>
  (...args: T): Promise<U> =>
    new Promise<U>((resolve, reject) =>
      func(...args, (err: any, result: U) => (err ? reject(err) : resolve(result))),
    );

const delay = promisify<[number], void>((d, cb) => setTimeout(cb, d));
delay(2000).then(() => console.log("Hi!")); // Promise resolves after 2s
