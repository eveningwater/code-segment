const offset = <T>(arr:T[],offset: number) => [...arr.slice(offset),...arr.slice(0,offset)];

offset([1, 2, 3, 4, 5], 2); // [3, 4, 5, 1, 2]
offset([1, 2, 3, 4, 5], -2); // [4, 5, 1, 2, 3]