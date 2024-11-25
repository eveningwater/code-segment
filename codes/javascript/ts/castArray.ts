const castArray = <T>(v:T):T[] => (Array.isArray(v) ? v : [v]);

castArray('foo'); // ['foo']
castArray([1]); // [1]