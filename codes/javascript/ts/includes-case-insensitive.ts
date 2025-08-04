const includesCaseInsensitive = (str: string, searchString: string) =>
    new RegExp(searchString, 'i').test(str);

includesCaseInsensitive('Blue Whale', 'blue'); // true