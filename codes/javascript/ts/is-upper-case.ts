const isUpperCase = (str: string) => str === str.toUpperCase();

isUpperCase('ABC'); // true
isUpperCase('A3@$'); // true
isUpperCase('aB4'); // false