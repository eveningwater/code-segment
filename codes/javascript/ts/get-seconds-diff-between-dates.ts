const getSecondsDiffBetweenDates = (dateInitial: Date, dateFinal: Date) =>
  (+dateFinal - +dateInitial) / 1000;

getSecondsDiffBetweenDates(
  new Date("2020-12-24 00:00:15"),
  new Date("2020-12-24 00:00:17")
); // 2
