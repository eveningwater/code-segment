const mask = (cc: number,num = 4,mask = "*") => `${cc}`.slice(-num).padStart(`${cc}`.length,mask);

mask(1234567890); // '******7890'
mask(1234567890, 3); // '*******890'
mask(1234567890, -4, '$'); // '$$$$567890'