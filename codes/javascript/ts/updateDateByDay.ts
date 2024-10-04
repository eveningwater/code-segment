const updateDateByDay = (date: string | number | Date, n: number) => {
    date = new Date(date);
    date.setDate(date.getDate() + n);
    return date.toISOString().split('T')[0];
};

updateDateByDay('2020-10-15', 10); // '2020-10-25'