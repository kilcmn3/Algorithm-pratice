/*
https://leetcode.com/problems/add-two-numbers/
solution: https://www.youtube.com/watch?v=3cTFm2uWrps&list=LL&index=1

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
  let head = new ListNode(0);
  let node = head;
  let carry = 0;

  while (l1 || l2) {
    let l1Val = l1 ? l1.val : 0;
    let l2Val = l2 ? l2.val : 0;

    let sumVal = l1Val + l2Val + carry;
    carry = 0;
    let newSum = sumVal;

    if (sumVal > 9) {
      newSum = sumVal % 10;
      carry = 1;
    }

    node.next = new ListNode(newSum);
    node = node.next;

    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }
  }

  if (carry) {
    node.next = new ListNode(carry);
  }
  return head.next;
};

console.log(addTwoNumbers(l1, l2));
