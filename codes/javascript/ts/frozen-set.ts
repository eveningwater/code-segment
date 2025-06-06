// const frozenSet = <T>(iterable: Iterable<T>) => {
//   const s = new Set(iterable);

//   const methodNames = ["add", "clear", "delete"];

//   methodNames.forEach((methodName) => {
//     Object.defineProperty(s, methodName, {
//       value: () => {
//         throw new Error("Cannot modify frozen set");
//       },
//       writable: false,
//       enumerable: false,
//       configurable: false,
//     });
//   });

//   return s;
// };

const frozenSet = <T>(iterable: Iterable<T>) => {
  const s = new Set(iterable);

  return new Proxy(s, {
    get(target, prop, receiver) {
      if (["add", "delete", "clear"].includes(prop as string)) {
        return () => {
          throw new Error("Cannot modify frozen set");
        };
      }
      return Reflect.get(target, prop, receiver);
    },
    set() {
      throw new Error("Cannot modify frozen set");
    },
    deleteProperty() {
      throw new Error("Cannot modify frozen set");
    },
  });
};
