type CheckPrefix<T> = T extends '+' | '-' ? T : never;
type CheckSuffix<X> = X extends `${infer P}%` ? [P, '%'] : [X, ""];
type PercentageParser<S extends string> = S extends `${CheckPrefix<infer L>}${infer R}` ? [L, ...CheckSuffix<R>] : ['', ...CheckSuffix<S>]


type PercentageParserPString1 = ""
type PercentageParserPString2 = "+85%"
type PercentageParserPString3 = "-85%"
type PercentageParserPString4 = "85%"
type PercentageParserPString5 = "85"

type PercentageParserR1 = PercentageParser<PercentageParserPString1> // expected ['', '', '']
type PercentageParserR2 = PercentageParser<PercentageParserPString2> // expected ["+", "85", "%"]
type PercentageParserR3 = PercentageParser<PercentageParserPString3> // expected ["-", "85", "%"]
type PercentageParserR4 = PercentageParser<PercentageParserPString4> // expected ["", "85", "%"]
type PercentageParserR5 = PercentageParser<PercentageParserPString5> // expected ["", "85", ""]