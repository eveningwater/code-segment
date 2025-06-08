const functionName = <T, U>(handler: (...args: T[]) => U) => (
  console.debug(handler.name), handler
);
let m = functionName(Math.max)(5, 6);
// max (logged in debug channel of console)
// m = 6
