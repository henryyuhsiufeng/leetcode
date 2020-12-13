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
  let count = 1;
  let goToTarget = 0;
  let node = head;

  // head special case
  if (node.next === null) {
    node = null;
    return node;
  }

  // traverse to count the total # of nodes
  while (node.next !== null) {
    node = node.next;
    count++;
  }
  // reset node back to head to make another pass
  node = head;
  // traverse to desired node
  while (goToTarget < count - n && node.next !== null) {
    // tail special case
    if (node.next.next === null && goToTarget + 1 === count - n) {
      node.next = null;
      return head;
    }
    node = node.next;
    goToTarget++;
  }

  // In the middle
  node.val = node.next.val;
  node.next = node.next.next;

  return head;
};
