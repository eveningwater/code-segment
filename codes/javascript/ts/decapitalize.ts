const deCapitalize = ([first, ...rest]: string, upperRest = false) =>
    first.toLowerCase() +
    (upperRest ? rest.join('').toUpperCase() : rest.join(''));
deCapitalize('FooBar'); // 'fooBar'
deCapitalize('FooBar', true); // 'fOOBAR'