const isSameDate = (dateA: Date, dateB: Date) =>
    dateA.toISOString() === dateB.toISOString();

isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true