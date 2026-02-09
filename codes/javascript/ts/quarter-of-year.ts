const quarterOfYear = (date = new Date()) => [
    Math.ceil((date.getMonth() + 1) / 3),
    date.getFullYear()
];

quarterOfYear(new Date('07/10/2018')); // [ 3, 2018 ]
quarterOfYear(); // [ 4, 2020 ]