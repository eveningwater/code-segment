const HSBToRGB = (h: number, s: number, b: number) => {
    s /= 100;
    b /= 100;
    const k = (i: number) => (i + h / 60) % 6;
    const f = (n: number) => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
    return [255 * f(5), 255 * f(3), 255 * f(1)];
};

const hsbRgbaArr = HSBToRGB(18, 81, 99); // [252.45, 109.31084999999996, 47.965499999999984]

// 转成字符串,再拼接一个透明度
const hsbRgba = `rgba(${hsbRgbaArr.join(',')},1)`; // rgba(252.45, 109.31084999999996, 47.965499999999984,1)