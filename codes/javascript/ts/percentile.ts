const percentile = <T>(arr:T[],val:T) => 100 * arr.reduce((acc,v) => acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0),0) / arr.length;

percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6); // 55