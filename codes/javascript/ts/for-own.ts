const forOwn = <T>(
  obj: Record<string, T>,
  handler: (v: T, k: string, o: Record<string, T>) => void
) => Object.keys(obj).forEach((k) => handler(obj[k], k, obj));
forOwn({ foo: "bar", a: 1 }, (v) => console.log(v)); // 'bar', 1
