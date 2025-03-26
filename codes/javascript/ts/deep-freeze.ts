type FreezeNestedObject<T> = {
    [key: string]: T | FreezeNestedObject<T>;
};

type FreezeNestedArray<T> = (T | FreezeNestedArray<T>)[]
const deepFreeze = <T>(obj: FreezeNestedObject<T> | FreezeNestedArray<T>) => {
    Object.keys(obj).forEach(prop => {
        if (typeof obj[prop] === 'object' && obj[prop]) {
            deepFreeze(obj[prop] as FreezeNestedObject<T>);
        }
    });
    return Object.freeze(obj);
};



const val = deepFreeze([1, [2, 3]]);

// val[0] = 3; // not allowed
// val[1][0] = 4; // not allowed as well