type CapitalizeWords<
    S extends string,
    W extends string = ''
> = S extends `${infer A}${infer B}`
    ? Uppercase<A> extends Lowercase<A>
    ? `${Capitalize<`${W}${A}`>}${CapitalizeWords<B>}`
    : CapitalizeWords<B, `${W}${A}`>
    : Capitalize<W>

type CapitalizeWords1 = CapitalizeWords<'foobar'> // 'Foobar'
type CapitalizeWords2 = CapitalizeWords<'FOOBAR'> // 'FOOBAR'
type CapitalizeWords3 = CapitalizeWords<'foo bar'> // 'Foo Bar'
type CapitalizeWords4 = CapitalizeWords<'foo bar hello world'> // 'Foo Bar Hello World'
type CapitalizeWords5 = CapitalizeWords<'foo bar.hello,world'> // 'Foo Bar.Hello,World'
type CapitalizeWords6 = CapitalizeWords<'aa!bb@cc#dd$ee%ff^gg&hh*ii(jj)kk_ll+mm{nn}oo|pp🤣qq'> // 'Aa!Bb@Cc#Dd$Ee%Ff^Gg&Hh*Ii(Jj)Kk_Ll+Mm{Nn}Oo|Pp🤣Qq'
type CapitalizeWords7 = CapitalizeWords<''> // ''