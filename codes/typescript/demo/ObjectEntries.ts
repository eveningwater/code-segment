type ObjectEntries<T> = {
    [K in keyof T]-?: [K, [T[K]] extends [undefined] ? T[K] : Exclude<T[K], undefined>]
}[keyof T];

interface ObjectEntriesModel {
    name: string;
    age: number;
    locations: string[] | null;
}
type modelEntries = ObjectEntries<ObjectEntriesModel> // ['name', string] | ['age', number] | ['locations', string[] | null];