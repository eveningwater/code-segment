const hasKey = <T extends object>(obj: T, keys: string[]) =>
  keys.length > 0 &&
  keys.every((key) => {
    if (typeof obj !== "object" || !obj.hasOwnProperty(key)) {
      return false;
    }
    obj = obj[key];
    return true;
  });

let obj = {
  a: 1,
  b: { c: 4 },
  "b.d": 5,
};
hasKey(obj, ["a"]); // true
hasKey(obj, ["b"]); // true
hasKey(obj, ["b", "c"]); // true
hasKey(obj, ["b.d"]); // true
hasKey(obj, ["d"]); // false
hasKey(obj, ["c"]); // false
hasKey(obj, ["b", "f"]); // false
