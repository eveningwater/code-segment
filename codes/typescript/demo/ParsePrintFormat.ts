type ControlsMap = {
    c: 'char',
    s: 'string',
    d: 'dec',
    o: 'oct',
    h: 'hex',
    f: 'float',
    p: 'pointer',
}
type ParsePrintFormat<S extends string> = S extends `${infer _}%${infer K}${infer R}`
    ? K extends keyof ControlsMap
    ? [ControlsMap[K], ...ParsePrintFormat<R>]
    : ParsePrintFormat<R>
    : [];
type ParsePrintFormatRes1 = ParsePrintFormat<''> //  []
type ParsePrintFormatRes2 = ParsePrintFormat<'Any string.'> //  []
type ParsePrintFormatRes3 = ParsePrintFormat<'The result is %d.'> //  ['dec']
type ParsePrintFormatRes4 = ParsePrintFormat<'The result is %%d.'> //  []
type ParsePrintFormatRes5 = ParsePrintFormat<'The result is %%%d.'> //  ['dec']
type ParsePrintFormatRes6 = ParsePrintFormat<'The result is %f.'> //  ['float']
type ParsePrintFormatRes7 = ParsePrintFormat<'The result is %h.'> //  ['hex']
type ParsePrintFormatRes8 = ParsePrintFormat<'The result is %q.'> //  []
type ParsePrintFormatRes9 = ParsePrintFormat<'Hello %s: score is %d.'> //  ['string', 'dec']
type ParsePrintFormatRes10 = ParsePrintFormat<'The result is %'> //  []