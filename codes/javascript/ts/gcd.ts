const gcd = (...arr:number[]) => {
    const _gcd = (x:number, y:number):number => (!y ? x : gcd(y, x % y));
    return [...arr].reduce((a, b) => _gcd(a, b));
};

gcd(8, 36); // 4
gcd(...[12, 8, 32]); // 4