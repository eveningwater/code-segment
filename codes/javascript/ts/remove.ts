const remove = <T>(arr: T[], func: (item: T) => boolean) =>
    Array.isArray(arr)
        ? arr.filter(func).reduce<T[]>((acc, item) => {
            arr.splice(arr.indexOf(item), 1);
            return acc.concat(item);
        }, [])
        : [];

remove([1, 2, 3, 4], n => n % 2 === 0); // [2, 4]