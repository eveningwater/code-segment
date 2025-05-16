const addWeekDays = (startDate: Date, count: number) =>
  Array.from({ length: count }).reduce((date: Date) => {
    date = new Date(date.setDate(date.getDate() + 1));
    if (date.getDay() % 6 === 0) {
      date = new Date(date.setDate(date.getDate() + (date.getDay() / 6 + 1)));
    }
    return date;
  }, startDate);
addWeekDays(new Date("Oct 09, 2020"), 5); // 'Oct 16, 2020'
addWeekDays(new Date("Oct 12, 2020"), 5); // 'Oct 19, 2020'
