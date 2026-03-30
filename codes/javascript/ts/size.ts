const size = <T>(val: T) =>
    Array.isArray(val)
        ? val.length
        : val && typeof val === 'object'
            ? (val as Record<string, T>).size || (val as Array<T>).length || Object.keys(val).length
            : typeof val === 'string'
                ? new Blob([val]).size
                : 0;

size([1, 2, 3, 4, 5]); // 5
size('size'); // 4
size({ one: 1, two: 2, three: 3 }); // 3