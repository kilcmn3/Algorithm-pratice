/*
https://leetcode.com/problems/longest-palindromic-substring/
https://www.youtube.com/watch?v=lo8n0ivbhog
Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
Example 3:

Input: s = "a"
Output: "a"
Example 4:

Input: s = "ac"
Output: "a"
*/

// solution 1.

var longestPalindrome = function (str) {
  if (str.length < 1 || str === null) return '';

  let longest = '';

  for (let i = 0; i < str.length; i++) {
    let oddPalindrome = expandFromCenter(str, i, i);
    let eventPalidrome = expandFromCenter(str, i - 1, i);

    if (oddPalindrome > longest.length) {
      longest = oddPalindrome;
    }
    if (eventPalidrome > longest.length) {
      longest = eventPalidrome;
    }
  }
  return longest;
};

var expandFromCenter = function (str, left, rigth) {
  let i = 0;
  while (str[left - 1] && str[left - 1] === str[rigth + 1]) {
    i++;
  }
  i--;
  return str.slice(left - 1, right + i + 1);
};

//solution 2

var longestPalindrome = function (s) {
  var max = '';
  for (var i = 0; i < s.length; i++) {
    for (var j = 0; j < 2; j++) {
      var left = i;
      var right = i + j;
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      if (right - left - 1 > max.length) {
        max = s.substring(left + 1, right);
      }
    }
  }
  return max;
};
