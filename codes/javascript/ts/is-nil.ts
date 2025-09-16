const isNil = (val: any) => val === undefined || val === null;

isNil(null); // true
isNil(undefined); // true
isNil(''); // false