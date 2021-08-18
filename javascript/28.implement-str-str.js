/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === "") return 0;
  if (haystack === "") return -1;

  const haystackLen = haystack.length;
  const needleLen = needle.length;

  for (let i = 0; i <= haystackLen - needleLen; i++) {
    let j = 0;
    while (j < needleLen && haystack[i + j] === needle[j]) {
      j++;
      if (j === needleLen) return i;
    }
  }

  return -1;
};
// @lc code=end
