/**
 * 生成字符串的所有排列组合（无重复字符时全排列）。
 * 若字符串包含重复字符，结果中会包含重复排列（与原始行为一致）。
 *
 * @param str - 输入字符串
 * @returns 所有排列组成的数组，若输入为空字符串则返回空数组
 */
function stringPermutations(str: string): string[] {
    // 边界情况：空字符串或单字符直接返回对应数组形式
    if (str.length === 0) return [];
    if (str.length === 1) return [str];
    if (str.length === 2) {
      return [str, str[1] + str[0]];
    }
  
    // 递归生成排列：固定每个字符作为首字符，拼接子串的所有排列
    return str
      .split('')
      .reduce<string[]>(
        (acc, letter, index) =>
          acc.concat(
            stringPermutations(str.slice(0, index) + str.slice(index + 1)).map(
              (permutation) => letter + permutation
            )
          ),
        []
      );
  }

stringPermutations('abc'); // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']