const computedYearDays = (year: number, month: number, day: number) => {
  // 非闰年每个月天数
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const isLeapYear = (y) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
  let days = day;
  for (let i = 0; i < month - 1; i++) {
    days += monthDays[i];
  }
  // 判断是否是闰年，如果是闰年则天数要多加1
  if (isLeapYear(year) && month > 2) {
    days++;
  }
  return days;
};

computedYearDays(2022, 6, 13); //164
