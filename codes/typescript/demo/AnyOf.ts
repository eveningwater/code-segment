type AnyOf<T extends any[]> = T[number] extends
    | false
    | 0
    | []
    | ''
    | { [key: string | number | symbol]: never }
    ? false
    : true;

type AnyOfSample1 = AnyOf<[1, '', false, [], {}]> // expected to be true.
type AnyOfSample2 = AnyOf<[0, '', false, [], {}]> // expected to be false.