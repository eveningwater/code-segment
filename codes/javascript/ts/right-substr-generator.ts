const rightSubstrGenerator = function* (str: string) {
  if (!str.length) {
    return;
  }
  for (let i in str as Iterable<string>) yield str.slice(-i - 1);
};

[...rightSubstrGenerator('hello')];
// [ 'o', 'lo', 'llo', 'ello', 'hello' ]