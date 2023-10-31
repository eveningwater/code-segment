type PublicType<T> = {
    [P in keyof T as P extends `${string}_${string}` ? never : P]: T[P]
}

type PublicTypeRes1 = PublicType<{ a: number }>; // { a: number }
type PublicTypeRes2 = PublicType<{ _b: string | bigint }>; // {}
type PublicTypeRes3 = PublicType<{ readonly c?: number }>; // { readonly c?: number }
type PublicTypeRes4 = PublicType<{ d: string; _e: string }>; // { d: string }
type PublicTypeRes5 = PublicType<{ _f: () => bigint[] }>; // {}
type PublicTypeRes6 = PublicType<{ g: '_g' }>; // { g: '_g' }
type PublicTypeRes7 = PublicType<{ __h: number; i: unknown }>; // { i: unknown }