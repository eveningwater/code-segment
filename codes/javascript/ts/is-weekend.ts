const isWeekend = (d = new Date()) => d.getDay() % 6 === 0;

isWeekend(); // true (if current date is 2022-11-05)