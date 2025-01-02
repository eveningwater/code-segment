const arithmeticProgression = (n: number, limit: number) =>
    Array.from({ length: Math.ceil(limit / n) }, (_, i) => (i + 1) * n);
arithmeticProgression(5, 25); // [5, 10, 15, 20, 25]