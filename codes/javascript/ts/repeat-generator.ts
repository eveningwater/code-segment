const repeatGenerator = function* <T>(val: T) {
  let v = val;
  while (true) {
    let newVal: T = yield v;
    if (newVal !== undefined) {
      v = newVal;
    }
  }
};

const repeater = repeatGenerator(5);
repeater.next(); // { value: 5, done: false }
repeater.next(); // { value: 5, done: false }
repeater.next(4); // { value: 4, done: false }
repeater.next(); // { value: 4, done: false }