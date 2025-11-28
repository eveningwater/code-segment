const mostFrequent = <T extends string | number>(arr: T[]): T | null => 
  Object.entries(arr.reduce((a, v) => {
    a[v] = a[v] ? a[v] + 1 : 1;
    return a;
  }, {} as Record<string | number, number>))
    .reduce((a, v) => v[1] > a[1] ? v : a, [null, 0] as [string | null, number])[0] as T | null;

mostFrequent(['a', 'b', 'a', 'c', 'a', 'a', 'b']); // 'a'