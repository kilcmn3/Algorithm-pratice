/*
 * https://leetcode.com/problems/middle-of-the-linked-list/
 */
var middleNode = function(head) {
      let lo = head, hi = head;
    while (hi && hi.next) {
        lo = lo.next;
        console.log("this is lo:", lo)
        hi = hi.next.next;
        consolelog("this is hi:", hi)
    }
    console.log("final ans": lo)
    return lo;
};

var head = {
  val: 1,
  next: {
    val: [2,3,4,5],
    next: {
      val: [3,4,5],
      next:{
        val: [4,5],
        next: {
          val: [5],
          next: null
        }
      }
    }
  }
}