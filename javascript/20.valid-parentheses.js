/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;

  const stack = [];
  const brackets = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "(" || char === "{" || char === "[") stack.push(char);
    else {
      const lastChar = stack.pop();
      if (brackets[char] !== lastChar) return false;
    }
  }
  return stack.length === 0;
};
// @lc code=end
