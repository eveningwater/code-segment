type IsPalindrome<
    T extends string | number,
    U = `${T}`
> = U extends `${infer L}${infer R}`
    ? R extends ''
    ? true
    : U extends `${L}${infer R}${L}`
    ? IsPalindrome<R>
    : false
    : true;
type IsPalindromeRes1 = IsPalindrome<'abc'>; //  false
type IsPalindromeRes2 = IsPalindrome<'b'>; //  true
type IsPalindromeRes3 = IsPalindrome<'abca'>; //  false
type IsPalindromeRes4 = IsPalindrome<'abba'>; //  true
type IsPalindromeRes5 = IsPalindrome<'abcba'>; //  true
type IsPalindromeRes6 = IsPalindrome<121>; //  true
type IsPalindromeRes7 = IsPalindrome<2332>; //  true
type IsPalindromeRes8 = IsPalindrome<19260817>; //  false