/*

https://leetcode.com/problems/longest-substring-without-repeating-characters/

Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.


*/

var lengthOfLongestSubstring = function (s) {
  // keeps track of the most recent index of each letter.
  const map = {};
  // keeps track of the starting index of the current substring.
  var left = 0;

  return s.split('').reduce((max, v, i) => {
    // starting index of substring is 1 + (the last index of this letter) to ensure this letter is not counted twice.
    left = map[v] >= left ? map[v] + 1 : left;
    // updates last recorded index of letter to the most recent index.
    map[v] = i;

    // indices of current substring is (idx - leftIdx, idx).
    // +1 because if your substring starts and ends at index 0, it still has a length of 1.
    return Math.max(max, i - left + 1);
  }, 0);
};
