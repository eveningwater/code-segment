type MapRule<T, U = any> = {
    mapFrom: T;
    mapTo: U;
}
type MapTypes<T, U extends MapRule<any, any>> = {
    [K in keyof T]: T[K] extends U['mapFrom'] ? U extends MapRule<T[K]> ? U['mapTo'] : never : T[K]
};

type MapTypesRes1 = MapTypes<{ stringToArray: string }, { mapFrom: string; mapTo: [] }>; // { stringToArray: [] }
type MapTypesRes2 = MapTypes<{ stringToNumber: string }, { mapFrom: string; mapTo: number }>; // { stringToNumber: number }
type MapTypesRes3 = MapTypes<{ stringToNumber: string; skipParsingMe: boolean }, { mapFrom: string; mapTo: number }>; // { stringToNumber: number; skipParsingMe: boolean }
type MapTypesRes4 = MapTypes<{ date: string }, { mapFrom: string; mapTo: Date } | { mapFrom: string; mapTo: null }>; // { date: null | Date }
type MapTypesRes5 = MapTypes<{ date: string }, { mapFrom: string; mapTo: Date | null }> // { date: null | Date }
type MapTypesRes6 = MapTypes<{ fields: Record<string, boolean> }, { mapFrom: Record<string, boolean>; mapTo: string[] }> // { fields: string[] }
type MapTypesRes7 = MapTypes<{ name: string }, { mapFrom: boolean; mapTo: never }> // { name: string }
type MapTypesRes8 = MapTypes<{ name: string; date: Date }, { mapFrom: string; mapTo: boolean } | { mapFrom: Date; mapTo: string }> // { name: boolean; date: string }