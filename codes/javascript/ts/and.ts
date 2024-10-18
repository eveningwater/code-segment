const and = <T,U>(a:T, b:U) => a && b;

and(true, true); // true
and(true, false); // false
and(false, false); // false
and(1,0); // 0