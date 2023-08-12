type ReplaceAll<
  S extends string,
  F extends string,
  T extends string
> = F extends ''
  ? S
  : S extends `${infer L}${F}${infer R}`
  ? `${L}${T}${ReplaceAll<R, F, T>}`
  : S;
type replacedAllStr = ReplaceAll<'t y p e s', ' ', ''>;
