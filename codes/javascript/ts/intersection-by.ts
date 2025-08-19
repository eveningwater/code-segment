const intersectionBy = <T, U>(a: T[], b: T[], handler: (x: T) => U) => {
  const s = new Set(b.map(handler));
  return [...new Set(a)].filter((x) => s.has(handler(x)));
};

intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
intersectionBy(
  [{ title: "Apple" }, { title: "Orange" }],
  [{ title: "Orange" }, { title: "Melon" }],
  (x) => x.title
); // [{ title: 'Orange' }]
