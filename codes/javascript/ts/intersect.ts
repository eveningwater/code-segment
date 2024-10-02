const intersect = <T>(...arg: Iterable<T>[]) => {
    const res = new Map(),
        intersect: T[] = [];
    arg.forEach(item =>
        [...new Set(item)].forEach(val =>
            res.set(val, res.get(val) ? res.get(val) + 1 : 1)
        )
    );
    res.forEach((value, key) => value === arg.length && intersect.push(key));
    return intersect;
}

intersect([1, 6, 7, 43, 9, 54, 7], [4, 7, 9, 76, 54, '6', '1']); // [7,9,54]
intersect(
  [1, 6, 7, 43, 9, 54, 7],
  [4, 7, 9, 76, 54, '6', '1'],
  [1, 424, 54, 4]
); // [54]