const countWeekDaysBetween = (startDate: Date, endDate: Date) =>
    Array.from({ length: (+endDate - +startDate) / (1000 * 3600 * 24) }).reduce<number>(
        count => {
            if (startDate.getDay() % 6 !== 0) {
                count++;
            }
            startDate = new Date(startDate.setDate(startDate.getDate() + 1));
            return count;
        },
        0
    );

countWeekDaysBetween(new Date('Oct 05, 2020'), new Date('Oct 06, 2020')); // 1
countWeekDaysBetween(new Date('Oct 05, 2020'), new Date('Oct 14, 2020')); // 7