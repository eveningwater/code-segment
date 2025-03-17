const dayOfYear = (date: Date) =>
    Math.floor((+date - +new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date()); // 当前时间是2022-2-25,所以答案是56