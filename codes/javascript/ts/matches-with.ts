const matchesWith = <T>(obj: Record<string, T>,source:Record<string, T>,fn?: (oV: T, sV: T, k: string, obj: Record<string, T>, source: Record<string, T>) => boolean):boolean => Object.keys(source).every(k => obj.hasOwnProperty(k) && fn ? fn(obj[k],source[k],k,obj,source) : obj[k] === source[k]);


const isGreeting = (val: string) => /^h(?:i|ello)$/.test(val);
matchesWith(
  { greeting: 'hello' },
  { greeting: 'hi' },
  (oV, sV) => isGreeting(oV) && isGreeting(sV)
); // true