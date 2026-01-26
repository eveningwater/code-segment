const pluralize = <T extends Record<string, string>>(val: T | number, word: string = '', plural = word + 's') => {
  const _pluralize = (num: number, word: string = '', plural = word + 's') =>
    [1, -1].includes(Number(num)) ? word : plural;
  if (typeof val === 'object') {
    return (num: number, word: string) => _pluralize(num, word, val[word]);
  }
  return _pluralize(val, word, plural);
};

pluralize(0, 'apple'); // 'apples'
pluralize(1, 'apple'); // 'apple'
pluralize(2, 'apple'); // 'apples'
pluralize(2, 'person', 'people'); // 'people'

const PLURALS = {
  person: 'people',
  radius: 'radii'
};
const autoPluralize = pluralize(PLURALS) as ((num: number, word: string) => string);
autoPluralize(2, 'person'); // 'people'