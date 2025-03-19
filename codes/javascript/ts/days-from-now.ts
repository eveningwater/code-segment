const daysFromNow = (n: number) => {
    let d = new Date();
    d.setDate(d.getDate() + Math.abs(n));
    return d.toISOString().split('T')[0];
};

daysFromNow(5); // 2022-03-04 (if current date is 2022-02-27)