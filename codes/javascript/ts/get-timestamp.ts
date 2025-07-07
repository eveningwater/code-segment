const getTimestamp = (date = new Date()) => Math.floor(date.getTime() / 1000);

getTimestamp(); // 1602162242