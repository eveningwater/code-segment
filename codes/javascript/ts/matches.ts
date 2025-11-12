const matches = <T>(obj: Record<string, T>,source:Record<string, T>):boolean => Object.keys(source).every(key => obj.hasOwnProperty(key) && source[key] === obj[key]);

matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true });
// true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true });
// false