const aperture = <T>(arr: T[], n: number) =>
    n > arr.length ? [] : arr.slice(n - 1).map((_, i) => arr.slice(i, i + n));

aperture([1, 2, 3, 4], 2); // [[1, 2], [2, 3], [3, 4]]
aperture([1, 2, 3, 4], 3); // [[1, 2, 3], [2, 3, 4]]
aperture([1, 2, 3, 4], 5); // []