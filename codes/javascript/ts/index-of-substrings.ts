const indexOfSubstrings = function* (str: string, searchValue: string) {
  let i = 0;
  while (true) {
    const r = str.indexOf(searchValue, i);
    if (r === -1) {
      return;
    }
    yield r;
    i = r + 1;
  }
};

[...indexOfSubstrings("tiktok tok tok tik tok tik", "tik")]; // [0, 15, 23]
[...indexOfSubstrings("tutut tut tut", "tut")]; // [0, 2, 6, 10]
[...indexOfSubstrings("hello", "hi")]; // []
