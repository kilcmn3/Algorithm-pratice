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
    console.log('odPalindrome', oddPalindrome);
    let evenPalidrome = expandFromCenter(str, i - 1, i);
    console.log('evenPalidrome', evenPalidrome);
    if (oddPalindrome.length > longest.length) {
      longest = oddPalindrome;
    }
    if (evenPalidrome.length > longest.length) {
      longest = evenPalidrome;
    }
  }
  return longest;
};

var expandFromCenter = function (str, left, right) {
  let i = 0;
  while (str[left - i] && str[left - i] === str[right + i]) {
    console.log('str[left-1] , ', str[left - 1]);
    console.log('str[right + i], ', str[right + i]);
    i++;
  }
  i--;
  console.log('hey returning what?', str.slice(left - i, right + i + 1));
  return str.slice(left - i, right + i + 1);
};

var str = 'babad'; //3

longestPalindrome(str);

//solution 2

// Expand Around Center solution
// T O(N^2)
// S O(1)
var longestPalindrome = function (s) {
  var max = '';
  for (var i = 0; i < s.length; i++) {
    // this loop is to take into account
    // different palindromes like 'aba' and 'abba'
    for (var j = 0; j < 2; j++) {
      var left = i;
      var right = i + j;
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      // here imagine we get into string like
      // "babad", then
      // right = 5
      // left = 0
      // and actual length of "abba" should be "4"
      // 5 - 0 - 1 === 4
      if (right - left - 1 > max.length) {
        max = s.substring(left + 1, right);
      }
    }
  }
  return max;
};
