interface ConstructableFunction {
    new (...args: any[]): any;
}

const myNew = <T extends ConstructableFunction>(constructor: T, ...args: any[]): any => {
    const o = Object.create({});
    o.__proto__ = constructor.prototype;
    let res = constructor.apply(o, args);
    return typeof res === 'object' ? res : o;
}

function Test(name: string) {
    this.name = name;
}
type TestConstructor = new (name: string) => ReturnType<typeof Test>

const Fn:TestConstructor = new Test('water');
// class Test {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }

const n1 = myNew(Fn, 'eveningwater');
console.log(n1);

