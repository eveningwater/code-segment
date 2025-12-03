const nor = <T, U>(a: T, b: U) => !(a || b);

nor(true, true); // false
nor(true, false); // false
nor(false, false); // true
