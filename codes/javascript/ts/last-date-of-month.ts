const lastDateOfMonth = (date = new Date()) => {
    const d = new Date(date.getFullYear(),date.getMonth() + 1,0);
    return d.toISOString().split('T')[0];
}

lastDateOfMonth(new Date('2015-08-11')); // '2015-08-30'