const lcm = (...arr: number[]) => {
    const gcd = (x: number, y: number) => (!y ? x : gcd(y, x % y));
    const _lcm = (x: number, y: number) => (x * y) / gcd(x, y);
    return [...arr].reduce((a, b) => _lcm(a, b));
};

lcm(12, 7); // 84
lcm(...[1, 3, 4, 5]); // 60