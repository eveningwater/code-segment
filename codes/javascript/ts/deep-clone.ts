type NestedObject<T> = {
    [key: string]: T | NestedObject<T>;
};

const deepClone = <T>(obj: NestedObject<T> | T[]) => {
    if (obj === null) {
        return null;
    }
    let arrClone: T[] = [];
    if (Array.isArray(obj)) {
        arrClone.length = obj.length;
        return Array.from(arrClone);
    }
    let clone: NestedObject<T> = Object.assign({}, obj);
    Object.keys(clone).forEach(
        key => clone[key] = (typeof obj[key] === 'object' && obj[key] ? deepClone(obj[key] as NestedObject<T>) : obj[key]) as T
    );
    return clone;
};

const a = { foo: 'bar', obj: { a: 1, b: 2 } };
const b = deepClone<string | number>(a); // a !== b, a.obj !== b.obj