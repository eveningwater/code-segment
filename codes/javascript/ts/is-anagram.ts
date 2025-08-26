/**
 * 判断两个字符串是否是变位词，方法1
 * @param str1 字符串1
 * @param str2 字符串2
 * @returns 是否是变位词
 */
const isAnagram = (str1: string, str2: string) => {
  const normalize = (str: string) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, "")
      .split("")
      .sort()
      .join();
  return normalize(str1) === normalize(str2);
};

/**
 * 统计字符串中每个字符出现的次数
 * @param str 字符串
 * @param mode 模式，0: 返回对象，1: 返回字符串，2: 返回对象，3: 返回字符串
 * @returns 统计结果
 */
function countChars(str: string, mode = 0): Record<number, number> | string | null {
  const charCount: Record<number, number> = {};
  for (let char of str) {
    const code = char.charCodeAt(0);
    charCount[code] = (charCount[code] || 0) + 1;
  }
  switch (mode) {
    case 0:
      return charCount;
    case 1:
      return Object.keys(charCount)
        .map((code) => String.fromCharCode(Number(code)))
        .join("");
    case 2:
      return charCount;
    case 3:
      const allChars: string[] = [];
      for (let i = 32; i <= 126; i++) {
        if (!charCount[i]) {
          allChars.push(String.fromCharCode(i));
        }
      }
      return allChars.join("");
    default:
      return null;
  }
}

/**
 * 判断两个字符串是否是变位词，方法2
 * @param str1 字符串1
 * @param str2 字符串2
 * @returns 是否是变位词
 */
function isAnagram2(str1: string, str2: string) {
  // 数组对象无法直接判断相等，所以需要转成字符串
  return (
    JSON.stringify(countChars(str1, 1)) === JSON.stringify(countChars(str2, 1))
  );
}


isAnagram("iceman", "cinema"); // true