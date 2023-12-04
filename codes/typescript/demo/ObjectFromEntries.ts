interface Model {
    name: string
    age: number
    locations: string[] | null
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];

type ObjectFromEntries<T extends [string, any]> = {
    [K in T[0]]: T extends [K, any] ? T[1] : never
}

type ObjectFromEntriesRes = ObjectFromEntries<ModelEntries>; // Model