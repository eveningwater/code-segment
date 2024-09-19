const RGBToHex = (r: number, g: number, b: number) =>
    ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
RGBToHex(255, 165, 1); // 'ffa501'