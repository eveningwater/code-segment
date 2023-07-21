type Includes<T extends readonly any[], U> = {
  [R in T[number]]: true;
}[U] extends true
  ? true
  : false;
type isPillarMen1 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>; // `false`
type isPillarMen2 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>; // `true`
