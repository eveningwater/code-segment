const daysInMonth = (year: number, month: number) => new Date(year, month, 0).getDate();

daysInMonth(2020, 12); // 31
daysInMonth(2024, 2); // 29