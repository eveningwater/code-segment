const isBeforeDate = (dateA: Date, dateB: Date) => {
  if (dateA instanceof Date && dateB instanceof Date) {
    return dateA < dateB;
  }
  return false;
};

isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
