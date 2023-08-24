// type Merge<T extends Record<string, any>, S extends Record<string, any>> = Omit<T, keyof S> & S;
type Merge<T extends Record<string, any>, S extends Record<string, any>> = {
    [K in keyof T | keyof S]: K extends keyof S ? S[K] : K extends keyof T ? T[K] : never
};
type MergeFoo = {
    name: string
    age: string
}
type MergeCoo = {
    age: number
    sex: string
}

type MergeResult = Merge<MergeFoo, MergeCoo> // expected to be {name: string, age: number, sex: string}
