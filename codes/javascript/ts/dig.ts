type DigDeepValue<T> = {
    [k: PropertyKey]: T | DigDeepValue<T>;
}
const dig = <T>(obj: Partial<DigDeepValue<T>>, target: PropertyKey): T | DigDeepValue<T> | undefined =>
    target in obj
        ? obj[target]
        : Object.values(obj).reduce((acc, val) => {
            if (acc !== undefined) {
                return acc;
            }
            if (typeof val === 'object' && val !== null) {
                return dig(val, target);
            }
        }, undefined);

const data = {
    level1: {
        level2: {
            level3: 'some data'
        }
    }
};
dig(data, 'level3'); // 'some data'
dig(data, 'level4'); // undefined