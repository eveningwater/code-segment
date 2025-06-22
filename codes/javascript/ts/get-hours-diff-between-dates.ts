const getHoursDiffBetweenDates = (dateInitial:number, dateFinal:number) =>
    (dateFinal - dateInitial) / (1000 * 3600);

getHoursDiffBetweenDates(
    +new Date('2021-04-24 10:25:00'),
    +new Date('2021-04-25 10:25:00')
  ); // 24