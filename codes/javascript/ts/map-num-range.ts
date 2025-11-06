const mapNumRange = (num: number, inMin: number, inMax: number, outMin: number, outMax: number) => ((num - inMin) * (outMax - outMin) / (inMax - inMin)) + outMin;

mapNumRange(5, 0, 10, 0, 100); // 50