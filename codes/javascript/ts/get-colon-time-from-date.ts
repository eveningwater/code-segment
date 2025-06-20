const getColonTimeFromDate = (date: Date) => date.toTimeString().slice(0, 8);

getColonTimeFromDate(new Date()); // '08:38:00'
