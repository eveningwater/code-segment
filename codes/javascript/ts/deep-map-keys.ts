
const deepMapKeys = <T, U extends string>(obj: T, handler: (...args: string[]) => U) =>
    Array.isArray(obj)
        ? obj.map(val => deepMapKeys(val, handler))
        : typeof obj === 'object' && obj
            ? Object.keys(obj as Record<string, string>).reduce((acc, cur) => {
                const key = handler(cur);
                const val = obj[cur];
                acc[key] =
                    val !== null && typeof val === 'object'
                        ? deepMapKeys(val, handler)
                        : val;
                return acc;
            }, {} as Record<string, string>)
            : obj;

const obj = {
    foo: '1',
    nested: {
        child: {
            withArray: [
                {
                    grandChild: ['hello']
                }
            ]
        }
    }
};
const upperKeysObj = deepMapKeys(obj, key => key.toUpperCase());