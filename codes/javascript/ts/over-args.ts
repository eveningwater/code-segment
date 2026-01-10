const overArgs = <T,U>(fn:(...args:T[]) => U,transform:((arg0:T) => T)[]) => (...args:T[]) => fn(...args.map((val,i) => transform[i](val)));


const square = (n:number) => n * n;
const double = (n:number) => n * 2;
const fn = overArgs((x:number, y:number) => [x, y], [square, double]);
fn(9, 3); // [81, 6]