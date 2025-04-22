const escapeRegExp = (str: string) =>
  str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

escapeRegExp("(test)"); // \\(test\\)
