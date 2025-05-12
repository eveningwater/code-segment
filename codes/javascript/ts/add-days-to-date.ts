const addDaysToDate = (date: number | string | Date, n: number) => {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d.toISOString().split("T")[0];
};
addDaysToDate("2020-10-15", 10); // '2020-10-25'
addDaysToDate("2020-10-15", -10); // '2020-10-05'
