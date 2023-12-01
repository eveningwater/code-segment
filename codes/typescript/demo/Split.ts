type Split<T extends string, U extends string = ' '> = string extends T
    ? string[]
    : T extends `${infer A}${U}${infer B}`
    ? [A, ...(B extends "" ? [] : Split<B, U>)]
    : U extends ""
    ? []
    : [T];
type SplitRes1 = Split<'Hi! How are you?'>; //  ['Hi! How are you?']
type SplitRes2 = Split<'Hi! How are you?', 'z'>; //  ['Hi! How are you?']
type SplitRes3 = Split<'Hi! How are you?', ' '>; //  ['Hi!', 'How', 'are', 'you?']
type SplitRes4 = Split<'Hi! How are you?', ''>; //  ['H', 'i', '!', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', '?']
type SplitRes5 = Split<'', ''>; //  []
type SplitRes6 = Split<'The sine in cosine', 'in'>; //  ['The s', 'e ', ' cos', 'e']
type SplitRes7 = Split<'Never say never, forever and ever.', 'ver'>; //  ['Ne', ' say ne', ', fore', ' and e', '.']
type SplitRes8 = Split<'', 'z'>; //  ['']
type SplitRes9 = Split<''>; //  ['']
type SplitRes10 = Split<string, 'whatever'>; //  string[]