const orderWith = <T>(
  arr: Record<string, T>[],
  prop: string,
  orders: string[]
) => {
  const orderValues = orders.reduce<Record<string, number>>((acc, item, i) => {
    acc[item] = i;
    return acc;
  }, {});
  return [...arr].sort((a, b) => {
    if (orderValues[a[prop] as string] === undefined) {
      return 1;
    }
    if (orderValues[b[prop] as string] === undefined) {
      return -1;
    }
    return orderValues[a[prop] as string] - orderValues[b[prop] as string];
  });
};
const users: { name: string; language?: string }[] = [
  { name: "fred", language: "Javascript" },
  { name: "barney", language: "TypeScript" },
  { name: "frannie", language: "Javascript" },
  { name: "anna", language: "Java" },
  { name: "jimmy" },
  { name: "nicky", language: "Python" },
];
orderWith(users, "language", ["Javascript", "TypeScript", "Java"]);
/*
[
  { name: 'fred', language: 'Javascript' },
  { name: 'frannie', language: 'Javascript' },
  { name: 'barney', language: 'TypeScript' },
  { name: 'anna', language: 'Java' },
  { name: 'jimmy' },
  { name: 'nicky', language: 'Python' }
]
*/
