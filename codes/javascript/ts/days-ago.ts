const daysAgo = (n: number) => {
    let d = new Date();
    d.setDate(d.getDate() - Math.abs(n));
    return d.toISOString().split('T')[0];
};

daysAgo(20); // 2022-02-06 (if current date is 2022-02-26)