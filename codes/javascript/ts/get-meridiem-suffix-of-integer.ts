enum MeridiemSuffixOfIntegerLang {
  EN = "en",
  ZH = "zh",
}
const getMeridiemSuffixOfInteger = (
  num: number,
  lang: MeridiemSuffixOfIntegerLang = MeridiemSuffixOfIntegerLang.EN
) => {
  const suffix = {
    en: ["am", "pm"],
    zh: ["上午", "下午"],
  };
  const [ams, pms] = suffix[lang];
  return num === 0 || num === 24
    ? 12 + ams
    : num === 12
    ? 12 + pms
    : num < 12
    ? (num % 12) + ams
    : (num % 12) + pms;
};

getMeridiemSuffixOfInteger(0); // '12am'
getMeridiemSuffixOfInteger(11); // '11am'
getMeridiemSuffixOfInteger(13); // '1pm'
getMeridiemSuffixOfInteger(25); // '1pm'
