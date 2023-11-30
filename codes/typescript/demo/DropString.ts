type DropOne<T extends string, S extends string> = T extends `${infer A}${S}${infer B}` ? DropOne<`${A}${B}`, S> : T;
type DropString<T extends string, S extends string> = S extends `${infer F}${infer R}` ? DropString<DropOne<T, F>, R> : T;

type DropStringRes1 = DropString<'butter fly!', ''>; //  'butter fly!'
type DropStringRes2 = DropString<'butter fly!', ' '>; //  'butterfly!'
type DropStringRes3 = DropString<'butter fly!', 'but'>; //  'er fly!'
type DropStringRes4 = DropString<' b u t t e r f l y ! ', 'but'>; //  '     e r f l y ! '
type DropStringRes5 = DropString<'    butter fly!        ', ' '>; //  'butterfly!'
type DropStringRes6 = DropString<' b u t t e r f l y ! ', ' '>; //  'butterfly!'
type DropStringRes7 = DropString<' b u t t e r f l y ! ', 'but'>; //  '     e r f l y ! '
type DropStringRes8 = DropString<' b u t t e r f l y ! ', 'tub'>; //  '     e r f l y ! '
type DropStringRes9 = DropString<' b u t t e r f l y ! ', 'b'>; //  '  u t t e r f l y ! '
type DropStringRes10 = DropString<' b u t t e r f l y ! ', 't'>; //  ' b u   e r f l y ! '