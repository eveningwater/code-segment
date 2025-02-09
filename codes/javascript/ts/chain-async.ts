type AsyncCallback<T> = (...args: T[]) => T;
const chainAsync = <T extends any>(handlers: AsyncCallback<T>[]) => {
  let cur = 0;
  const last = handlers[handlers.length - 1];
  const next = () => {
    const fn = handlers[cur++];
    return fn === last ? fn() : fn(next);
  };
  next();
};

chainAsync([
  (next) => {
    console.log("0 seconds");
    setTimeout(next, 1000);
  },
  (next) => {
    console.log("1 second");
    setTimeout(next, 1000);
  },
  () => {
    console.log("2 second");
  },
]);
