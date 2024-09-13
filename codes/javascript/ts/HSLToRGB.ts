const HSLToRGB = (h: number, s: number, l: number) => {
    s /= 100;
    l /= 100;
    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
    return [255 * f(0), 255 * f(8), 255 * f(4)];
};

const hslRgbaArr = HSLToRGB(13, 100, 11); // [56.1, 12.155, 0]

// 转成字符串,再拼接一个透明度
const hslRgba = `rgba(${hslRgbaArr.join(',')},1)`; // rgba(56.1,12.155,0,1)