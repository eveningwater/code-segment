const isBetweenDates = (dateStart: Date, dateEnd: Date, date: Date) => {
  if (
    dateStart instanceof Date &&
    dateEnd instanceof Date &&
    date instanceof Date
  ) {
    return date > dateStart && date < dateEnd;
  }
  return false;
};

isBetweenDates(
  new Date(2010, 11, 20),
  new Date(2010, 11, 30),
  new Date(2010, 11, 19)
); // false
isBetweenDates(
  new Date(2010, 11, 20),
  new Date(2010, 11, 30),
  new Date(2010, 11, 25)
); // true
