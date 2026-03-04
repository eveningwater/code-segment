const removeWhitespace = (str: string) => str.replace(/\s+/, '');

removeWhitespace('Lorem ipsum.\n Dolor sit amet. ');
// 'Loremipsum.Dolorsitamet.'