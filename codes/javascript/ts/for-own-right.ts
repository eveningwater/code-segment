const forOwnRight = <T>(
  obj: Record<string, T>,
  handler: (v: T, k: string, o: Record<string, T>) => void
) =>
  Object.keys(obj)
    .reverse()
    .forEach((k) => handler(obj[k], k, obj));
forOwnRight({ foo: "bar", a: 1 }, (v) => console.log(v));
