type NestedObject<T> = {
  [key: string]: T | NestedObject<T>;
};
const flattenObject = <T>(obj: NestedObject<T>, prefix = "") =>
  Object.keys(obj).reduce<Record<string, T>>((acc, k) => {
    const pre = prefix.length ? `${prefix}.` : "";
    if (
      typeof obj[k] === "object" &&
      obj[k] !== null &&
      Object.keys(obj[k]).length > 0
    ) {
      Object.assign(acc, flattenObject(obj[k] as NestedObject<T>, pre + k));
    } else {
      acc[pre + k] = obj[k] as T;
    }
    return acc;
  }, {});

flattenObject({ a: { b: { c: 1 } }, d: 1 }); // { 'a.b.c': 1, d: 1 }
