type Num = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type MM = `0${Num}` | `1${0 | 1 | 2}`;

type AllDate =
    | `${MM}${`${0}${Num}` | `${1}${0 | Num}` | `2${0 | Exclude<Num, 9>}`}`
    | `${Exclude<MM, '02'>}${29 | 30}`
    | `${Exclude<MM, '02' | '04' | '06' | '09' | '11'>}${31}`;


type ValidDate<T extends string> = T extends AllDate ? true : false;

type ValidDateRes1 = ValidDate<'0102'>; //  true
type ValidDateRes2 = ValidDate<'0131'>; //  true
type ValidDateRes3 = ValidDate<'1231'>; //  true
type ValidDateRes4 = ValidDate<'0229'>; //  false
type ValidDateRes5 = ValidDate<'0100'>; //  false
type ValidDateRes6 = ValidDate<'0132'>; //  false
type ValidDateRes7 = ValidDate<'1301'>; //  false
type ValidDateRes8 = ValidDate<'0123'>; //  true
type ValidDateRes9 = ValidDate<'01234'>; // false
type ValidDateRes10 = ValidDate<''>;  // false