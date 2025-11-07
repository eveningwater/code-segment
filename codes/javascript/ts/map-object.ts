export const mapObject = <T>(arr: T[], fn: (item: T, index: number, arr: T[]) => T): Record<string, T> => arr.reduce<Record<string, T>>((acc,item,index) => {
    acc[item as string] = fn(item,index,arr);
    return acc;
},{});

mapObject([1, 2, 3], a => a * a); // { 1: 1, 2: 4, 3: 9 }