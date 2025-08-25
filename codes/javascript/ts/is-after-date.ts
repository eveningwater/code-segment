const isAfterDate = (dateA: Date, dateB: Date) => {
  if (dateA instanceof Date && dateB instanceof Date) {
    return dateA > dateB;
  }
  return false;
};

isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
