const getDaysDiffBetweenDates = (dateInitial: number, dateFinal: number) =>
    Math.ceil((dateFinal - dateInitial) / (1000 * 3600 * 24));

getDaysDiffBetweenDates(+new Date('2017-12-13'), +new Date('2017-12-22')); // 9