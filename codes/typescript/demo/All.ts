type IsEqual<T, U> = (<P>() => P extends T ? 1 : 2) extends <P>() => P extends U
    ? 1
    : 2
    ? true
    : false;
type All<T, U> = T extends [infer F, ...infer R]
    ? IsEqual<F, U> extends true
    ? All<R, U>
    : false
    : true;
type AllRes1 = All<[1, 1, 1], 1> //  true
type AllRes2 = All<[1, 1, 2], 1> //  false
type AllRes3 = All<['1', '1', '1'], '1'> //  true
type AllRes4 = All<['1', '1', '1'], 1> //  false
type AllRes5 = All<[number, number, number], number> // true
type AllRes6 = All<[number, number, string], number> // false
type AllRes7 = All<[null, null, null], null> //  true
type AllRes8 = All<[[1], [1], [1]], [1]> //  true
type AllRes9 = All<[{}, {}, {}], {}> //  true
type AllRes10 = All<[never], never> //  true
type AllRes11 = All<[any], any> //  true
type AllRes12 = All<[unknown], unknown> //  true
type AllRes13 = All<[any], unknown> //  false
type AllRes14 = All<[unknown], any> //  false
type AllRes15 = All<[1, 1, 2], 1 | 2> //  false