const initialize2DArray = <T>(w: number, h: number, val: T | null = null) =>
    Array.from({ length: h }).map<T[]>(() => Array.from({ length: w }).fill(val) as T[]);

initialize2DArray(2, 2, 0); // [[0, 0], [0, 0]]