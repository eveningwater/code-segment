const partial = <T, U>(fn: (...args: U[]) => T, ...partials: U[]) => (...args: any[]) => fn(...partials, ...args);

const greet = (greeting: string, name: string) => greeting + ' ' + name + '!';
const greetHello = partial(greet, '你好');
greetHello('john'); // '你好john！'