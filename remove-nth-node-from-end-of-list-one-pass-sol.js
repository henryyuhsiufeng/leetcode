/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let nodeOne = dummy;
  let nodeTwo = dummy;
  // move second node to gap location
  for (let i = 1; i <= n + 1; i++) {
    nodeOne = nodeOne.next;
  }
  // traverse until gap reaches the end of list
  while (nodeOne !== null) {
    nodeOne = nodeOne.next;
    nodeTwo = nodeTwo.next;
  }
  nodeTwo.next = nodeTwo.next.next;
  return dummy.next;
};
