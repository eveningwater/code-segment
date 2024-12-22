const permutation = (per: string | string[]) => {
    if (per.length === 1) {
        return [per];
    }
    let res: string[] = [];
    [...per].forEach((_, i, str) => {
        const temp = [...str];
        const header = temp.splice(i, 1);
        permutation(temp).forEach(value => res.push([header, ...value].join('')));
    });
    return [...new Set(res)];
}

permutation('abca'); // ["abca", "abac", "acba", "acab", "aabc", "aacb", "baca", "baac", "bcaa", "caba", "caab", "cbaa"]
permutation(['abc','cba'])