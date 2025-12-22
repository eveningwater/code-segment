const objectify = <T, V = T>(arr: T[], 
    mapKey: (item: T) => string | number, 
    mapValue: (item: T) => V = (item: T) => item as unknown as V) => arr.reduce((acc, item) => {
    acc[mapKey(item)] = mapValue(item);
    return acc;
}, {} as Record<string | number, V>)

const people = [{ name: 'John', age: 42 }, { name: 'Adam', age: 39 }];
objectify(people, p => p.name.toLowerCase());
// { john: { name: 'John', age: 42 }, adam: { name: 'Adam', age: 39 } }
objectify(
    people,
    p => p.name.toLowerCase(),
    p => p.age
);
// { john: 42, adam: 39 }