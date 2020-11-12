/*
https://leetcode.com/problems/generate-parentheses/

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8
*/

var generateParenthesis = function (n) {
  //n givien, then parenthese will be n * 2 because "(" open , ")"  close
  //maximum of opening bracket can be n
  let container = ['(', ')'];
  let seen = {};
  let onOffSwitch = true;

  //need index
  //[a,b,c,1,2,3]
  //{"(" : 1, "(":2, "(":3}
};

/*
function generateParenthesis(n) {
  const res = [];

  function go(l, r, s) {  // l: left remaining, r: right remaining
    if (l > r) return;  // The number of '(' should be always >= ')'

    if (l === 0 && r === 0) {
      res.push(s);
      return;
    }

    if (l > 0) go(l - 1, r, s + '(');
    if (r > 0) go(l, r - 1, s + ')');
  }

  go(n, n, '');
  return res;
}
*/
