const isAlpha = (str: string) => /^[a-zA-Z]*$/.test(str);

isAlpha('sampleInput'); // true
isAlpha('this Will fail'); // false
isAlpha('123'); // false