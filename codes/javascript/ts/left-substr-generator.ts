const leftSubstrGenerator = function* (str: string) {
  if (typeof str !== "string" || !str.length) {
    return;
  }
  for (let i = 0; i < str.length; i++) {
    yield str.slice(0, i + 1);
  }
};

[...leftSubstrGenerator("hello")];
// [ 'h', 'he', 'hel', 'hell', 'hello' ]
