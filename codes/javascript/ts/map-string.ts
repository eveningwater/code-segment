export const mapString = (str: string, fn: (char: string, index: number, str: string) => string) => str.split('').map((i,v) => fn(i,v,str)).join(''); 

mapString('lorem ipsum', c => c.toUpperCase()); // 'LOREM IPSUM'