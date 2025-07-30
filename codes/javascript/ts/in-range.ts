const inRange = (n: number, start: number, end: number | null = null) => {
    if (end && start > end) {
        [end, start] = [start, end];
    }
    return end === null ? n >= 0 && n < start : n >= start && n < end;
};

inRange(3, 2, 5); // true
inRange(3, 4); // true
inRange(2, 3, 5); // false
inRange(3, 2); // false