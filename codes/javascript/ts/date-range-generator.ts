const dateRangeGenerator = function* (start: Date, end: Date, step = 1) {
    let d = start;
    while (d <= end) {
        yield new Date(d);
        d.setDate(d.getDate() + step);
    }
};

[...dateRangeGenerator(new Date('2021-06-01'), new Date('2021-06-04'))];
// [ 2021-06-01, 2021-06-02, 2021-06-03,2021-06-04 ]