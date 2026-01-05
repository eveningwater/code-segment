const or = <T, U>(a: T, b: U) => a || b;

or(true, true); // true
or(true, false); // true
or(false, false); // false
