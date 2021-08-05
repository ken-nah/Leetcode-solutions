/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanNum = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  const numeralLength = s.length - 1;
  let result = 0,
    i = 0;

  while (i <= numeralLength) {
    const currentRomanSymbol = s[i];
    const nextRomanSymbol = s[i + 1];

    if (romanNum[nextRomanSymbol] > romanNum[currentRomanSymbol]) {
      const digit = romanNum[nextRomanSymbol] - romanNum[currentRomanSymbol];
      result += digit;
      i += 2;
    } else {
      result += romanNum[currentRomanSymbol];
      i += 1;
    }
  }

  return result;
};
// @lc code=end
