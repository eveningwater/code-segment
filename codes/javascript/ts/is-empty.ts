const isEmpty = <T>(val:T) => val === null || !(Object.keys(val as object) || val).length;

const isEmpty1 = <T>(obj:T) => Reflect.ownKeys(obj as object).length === 0 && (obj as object).constructor === Object

isEmpty([]); // true
isEmpty({}); // true
isEmpty(''); // true
isEmpty([1, 2]); // false
isEmpty({ a: 1, b: 2 }); // false
isEmpty('text'); // false
isEmpty(123); // true - type is not considered a collection
isEmpty(true); // true - type is not considered a collection