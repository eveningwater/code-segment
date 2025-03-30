const defaults = <T>(obj: T, ...defs: T[]): T =>
    Object.assign({}, obj, ...defs.reverse(), obj);
defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }