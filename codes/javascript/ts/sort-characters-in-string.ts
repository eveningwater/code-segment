const sortCharactersInString = (str: string) =>
    [...str].sort((a, b) => a.localeCompare(b)).join('');

sortCharactersInString('cabbage'); // 'aabbceg'