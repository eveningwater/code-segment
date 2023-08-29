type IsUnion<T, C extends T = T> = (T extends T ? C extends T ? true : unknown : never) extends true ? false : true;
type IsUnionCase1 = IsUnion<string> // false
type IsUnionCase2 = IsUnion<string | number> // true
type IsUnionCase3 = IsUnion<[string | number]> // false