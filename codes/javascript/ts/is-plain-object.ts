const isPlainObject = <T>(val:T):val is T=>
    !!val && typeof val === 'object' && val.constructor === Object;


isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false