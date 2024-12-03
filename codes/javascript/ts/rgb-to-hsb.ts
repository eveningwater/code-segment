const RGBToHSB = (r: number, g: number, b: number) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const v = Math.max(r, g, b);
    const n = v - Math.min(r, g, b);
    const h =
        n && v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n;
    // h,s = n / v,b = v
    return [60 * (h < 0 ? h + 6 : h), v && (n / v) * 100, v * 100];
};

const rgbaHsbArr = RGBToHSB(252, 111, 48);
// [18.529411764705856, 80.95238095238095, 98.82352941176471]