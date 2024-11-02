type ObjKey = string | number | symbol;
const assertValidKeys = <T extends unknown>(obj: Record<ObjKey, T>, keys: ObjKey[]) =>
    Object.keys(obj).every(key => keys.includes(key));

assertValidKeys({ id: 10, name: 'apple' }, ['id', 'name']); // true
assertValidKeys({ id: 10, name: 'apple' }, ['id', 'type']); // false