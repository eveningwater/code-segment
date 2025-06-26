const getMinutesDiffBetweenDates = (dateInitial: Date, dateFinal: Date) =>
  (+dateFinal - +dateInitial) / (1000 * 60);

getMinutesDiffBetweenDates(
  new Date("2021-04-24 01:00:15"),
  new Date("2021-04-24 02:00:15")
); // 60
