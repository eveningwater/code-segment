const haveSameContents = <T>(a: T[], b:T[]) => {
    for (const v of new Set([...a, ...b])) {
        if (a.filter(e => e === v).length !== b.filter(e => e === v).length) {
            return false;
        }
    }
    return true;
};


haveSameContents([1, 2, 4], [2, 4, 1]); // true
haveSameContents([1, 2, 4], [2, 4]); // false