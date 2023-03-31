// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
//  Definition for singly-linked list.
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function removeElements(head, val) {
    var tem = new ListNode(-1, head);
    var p = tem;
    while (p && p.next) {
        if (p.next.val === val) {
            p.next = p.next.next;
            continue;
        }
        p = p.next;
    }
    return tem;
}
