type MapDict = {
    d: number;
    s: string;
};

type Format<T extends string> = T extends `${string}%${infer M}${infer R}`
    ? M extends keyof MapDict
    ? (x: MapDict[M]) => Format<R>
    : Format<R>
    : string;

type FormatRes1 = Format<'abc'> //  string
type FormatRes2 = Format<'a%sbc'> //  (s1: string) => string
type FormatRes3 = Format<'a%dbc'> //  (d1: number) => string
type FormatRes4 = Format<'a%%dbc'> //  string
type FormatRes5 = Format<'a%%%dbc'> //  (d1: number) => string
type FormatRes6 = Format<'a%dbc%s'> //  (d1: number) => (s1: string) => string