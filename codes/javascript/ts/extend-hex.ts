const extendHex = (shortHex: string) =>
  "#" +
  shortHex
    .slice(shortHex.startsWith("#") ? 1 : 0)
    .split("")
    .map((x) => x + x)
    .join("");

extendHex("#03f"); // '#0033ff'
extendHex("05a"); // '#0055aa'
