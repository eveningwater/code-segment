type CheckRepeatedChars<T extends string> = T extends `${infer F}${infer R}` ? R extends `${string}${F}${string}` ? true : CheckRepeatedChars<R> : false;

type CheckRepeatedCharsRes1 = CheckRepeatedChars<'abc'>   // false
type CheckRepeatedCharsRes2 = CheckRepeatedChars<'aba'>   // true
type CheckRepeatedCharsRes3 = CheckRepeatedChars<'abb'> // true
type CheckRepeatedCharsRes4 = CheckRepeatedChars<'cbc'> //  true
type CheckRepeatedCharsRes5 = CheckRepeatedChars<''> //  false