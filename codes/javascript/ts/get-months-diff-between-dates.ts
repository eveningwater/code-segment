const getMonthsDiffBetweenDates = (dateInitial: Date, dateFinal: Date) =>
  Math.max(
    (dateFinal.getFullYear() - dateInitial.getFullYear()) * 12 +
      dateFinal.getMonth() -
      dateInitial.getMonth(),
    0
  );
getMonthsDiffBetweenDates(new Date("2017-12-13"), new Date("2018-04-29")); // 4
