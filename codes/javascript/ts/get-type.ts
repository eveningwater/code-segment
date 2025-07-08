const getType = <T>(v: T) =>
    v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name;

getType(new Set([1, 2, 3])); // 'Set'