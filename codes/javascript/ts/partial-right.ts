const partialRight = <T, U>(fn: (...args: T[]) => U, ...partials: T[]) => (...args: T[]) => fn(...args,...partials);

const greet = (greeting: string, name: string) => greeting + ' ' + name + '!';
const greetJohn = partialRight<string, string>(greet, 'John');
greetJohn('Hello'); // 'Hello John!'