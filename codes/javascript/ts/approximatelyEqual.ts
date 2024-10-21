const approximatelyEqual = (a: number, b:number, epsilon = 0.001) => Math.abs(a - b) < epsilon;

approximatelyEqual(Math.PI / 2.0, 1.5708); // true