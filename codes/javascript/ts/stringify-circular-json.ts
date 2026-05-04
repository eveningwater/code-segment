const stringifyCircularJSON = <T extends object>(obj: T) => {
    const seen = new WeakSet<T>();
    return JSON.stringify(obj, (_key, value) => {
        if (value !== null && typeof value === "object") {
            if (seen.has(value as T)) {
                return;
            }
            seen.add(value as T);
        }
        return value;
    });
};

const obj = { n: 42 } as { n: number; obj?: typeof obj };
obj.obj = obj;
stringifyCircularJSON(obj); // '{"n":42}'
