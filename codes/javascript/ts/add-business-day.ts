const addBusinessDay = (startDate: Date, n: number) =>
    Array.from({ length: n }).reduce<Date>(date => {
        date = new Date(date.setDate(date.getDate() + 1));
        // 判断如果是非工作日，即周六周日
        if (date.getDay() % 6 === 0)
            date = new Date(date.setDate(date.getDate() + (date.getDay() / 6 + 1)));
        return date;
    }, startDate);

addBusinessDay(new Date('Oct 09, 2020'), 5); // 'Oct 16, 2020'
addBusinessDay(new Date('Oct 12, 2020'), 5); // 'Oct 19, 2020'