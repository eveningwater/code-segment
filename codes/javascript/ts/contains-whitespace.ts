const containsWhitespace = (str: string) => /\s/.test(str);

containsWhitespace('lorem'); // false
containsWhitespace('lorem ipsum'); // true