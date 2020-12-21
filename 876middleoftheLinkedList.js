/*
  https://leetcode.com/problems/middle-of-the-linked-list/
 */

var middleNode = function (head) {
  let lo = head;
  let hi = head;
  while (hi && hi.next) {
    lo = lo.next;
    hi = hi.next.next;
  }
  return lo;
};
