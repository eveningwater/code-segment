type Intersection<T extends any[]> = T extends [infer F, ...infer R]
    ? (F extends any[] ? F[number] : F) & Intersection<R>
    : unknown;
type IntersectionRes1 = Intersection<[[1, 2], [2, 3], [2, 2]]>; //  2
type IntersectionRes2 = Intersection<[[1, 2, 3], [2, 3, 4], [2, 2, 3]]>; //  2 | 3
type IntersectionRes3 = Intersection<[[1, 2], [3, 4], [5, 6]]>; //  never
type IntersectionRes4 = Intersection<[[1, 2, 3], [2, 3, 4], 3]>; //  3
type IntersectionRes5 = Intersection<[[1, 2, 3], 2 | 3 | 4, 2 | 3]>; //  2 | 3
type IntersectionRes6 = Intersection<[[1, 2, 3], 2, 3]>; //  never