const replaceLast = (str: string, pattern: RegExp | string, replacement: string) => {
  const match =
    typeof pattern === 'string'
      ? pattern
      : (str.match(new RegExp(pattern.source, 'g')) || []).slice(-1)[0];
  if (!match) {
    return str;
  }
  const last = str.lastIndexOf(match);
  return last !== -1
    ? `${str.slice(0, last)}${replacement}${str.slice(last + match.length)}`
    : str;
};

replaceLast('abcabdef', 'ab', 'gg'); // 'abcggdef'
replaceLast('abcabdef', /ab/, 'gg'); // 'abcggdef'
replaceLast('abcabdef', 'ad', 'gg'); // 'abcabdef'
replaceLast('abcabdef', /ad/, 'gg'); // 'abcabdef'