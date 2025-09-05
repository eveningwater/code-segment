const isDisjoint = <T>(a: Iterable<T>, b: Iterable<T>) => {
  const sA = new Set(a),
    sB = new Set(b);

  return [...sA].every((v) => !sB.has(v));
};

isDisjoint(new Set([1, 2]), new Set([3, 4])); // true
isDisjoint(new Set([1, 2]), new Set([1, 3])); // false
