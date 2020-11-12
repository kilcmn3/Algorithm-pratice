/*
https://leetcode.com/problems/longest-common-prefix/

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.

*/

//Need to study more
var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';
  if (strs.length === 1) return strs[0];

  return strs.reduce((acc, cur) => {
    let i = 0;
    let output = '';
    while (acc[i] && cur[i] && acc[i] === cur[i]) {
      output = output + acc[i];
      i++;
    }
    return output;
  });
};
