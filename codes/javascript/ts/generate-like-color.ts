const generateLikeColor = (color: string, n = 7) => {
    let [r, g, b, a = 1] = color.replace(/rgba?|\(|\)/gi, '').split(',').map(Number);
    const res: string[] = [];
    for (let i = 0; i < n; i++) {
        r += 33;
        b += 33;
        g += 33;
        res.push(`rgba(${Math.min(r, 255)},${Math.min(g, 255)},${Math.min(b, 255)},${a})`);
    }
    return res;
}

generateLikeColor('rgba(0,0,255,1)');
/*[
    'rgba(33,33,255,1)',
    'rgba(66,66,255,1)',
    'rgba(99,99,255,1)',
    'rgba(132,132,255,1)',
    'rgba(165,165,255,1)',
    'rgba(198,198,255,1)',
    'rgba(231,231,255,1)'
]*/