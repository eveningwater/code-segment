const maxDate = (...dates: Date[]) => new Date(Math.max(...dates.map(d => d.getTime())));

const dates = [
    new Date(2017, 4, 13),
    new Date(2018, 2, 12),
    new Date(2016, 0, 10),
    new Date(2016, 0, 9)
];
maxDate(...dates); // 2018-03-11T22:00:00.000Z