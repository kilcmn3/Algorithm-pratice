/*
https://leetcode.com/problems/add-two-numbers/

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next = new ListNode(4);

var addTwoNumbers = function (l1, l2) {
  var List = new ListNode(0);
  var head = List;
  var sum = 0;
  var carry = 0;

  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      console.log('l1 ,', l1);
      sum = sum + l1.val;
      l1 = l1.next;
      console.log('l1 sum is ,', sum);
      console.log('l1 next is ,', l1);
    }
    if (l2 !== null) {
      console.log('l2 ,', l2);
      sum = sum + l2.val;
      l2 = l2.next;
      console.log('l2 sum is ,', sum);
      console.log('l2 next is ,', l2);
    }
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
      console.log('sum >= 10 ,', sum);
    }

    head.next = new ListNode(sum);
    head = head.next;
    console.log('head.next is ,', head.next);
    sum = carry;
    console.log('sum is', sum);
    carry = 0;
  }
  console.log('return ,', List.next);
  return List.next;
};

console.log(addTwoNumbers(l1, l2));
