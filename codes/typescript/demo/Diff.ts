// type Diff<T extends Record<string | number | symbol, any>, U extends Record<string | number | symbol, any>> = {
//     [K in keyof (T & U) as K extends keyof (T | U) ? never : K]: (T & U)[K]
// }
type Diff<O, O1> = Omit<O & O1, keyof (O | O1)>
type DiffFoo = {
    a: string;
    b: number;
}
type DiffBar = {
    a: string;
    c: boolean
}

type DiffResult1 = Diff<DiffFoo, DiffBar> // { b: number, c: boolean }
type DiffResult2 = Diff<DiffBar, DiffFoo> // { b: number, c: boolean }
