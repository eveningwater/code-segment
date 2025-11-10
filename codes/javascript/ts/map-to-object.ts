const mapToObject = <T>(map: Map<string, T>) => Object.fromEntries(map.entries());

mapToObject(new Map([['a', 1], ['b', 2]])); // {a: 1, b: 2}