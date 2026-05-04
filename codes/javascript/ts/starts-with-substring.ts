/**
 * 查找 `word` 的一个后缀子串，该子串同时是 `text` 的前缀。
 * 返回最先匹配到的子串（从最短后缀开始匹配），若没有匹配则返回 `undefined`。
 *
 * @param text - 待检查的字符串
 * @param word - 提供后缀候选的字符串
 * @returns 匹配的后缀子串，或 `undefined`
 */
function startsWithSubstring(text: string, word: string): string | undefined {
    for (let i = 0; i < word.length; i++) {
        const subStr = word.slice(-i - 1); // 依次取后缀 "e", "de", "cde", ...
        if (text.startsWith(subStr)) {
            return subStr;
        }
    }
    return undefined;
}

startsWithSubstring('/>Lorem ipsum dolor sit amet', '<br />'); // '/>'