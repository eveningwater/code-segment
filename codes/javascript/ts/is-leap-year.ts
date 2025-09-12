const isLeapYear = (year: number) => new Date(year, 1, 29).getMonth() === 1;

isLeapYear(2019); // false
isLeapYear(2020); // true
