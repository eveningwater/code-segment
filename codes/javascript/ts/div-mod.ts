const divMod = (x:number, y:number) => [Math.floor(x / y), x % y];

divMod(8, 3); // [2, 2]
divMod(3, 8); // [0, 3]
divMod(5, 5); // [1, 0]