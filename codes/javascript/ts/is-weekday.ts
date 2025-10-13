const isWeekday = (d = new Date()) => d.getDay() % 6 !== 0;

isWeekday(); // true (if current date is 2022-11-03)