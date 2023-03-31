// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
//  Definition for singly-linked list.
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }
function removeElements(head:ListNode | null,val:number):ListNode | null{
    const tem = new ListNode(-1,head)
    let p = tem
    while(p && p.next){
        if(p.next.val === val){
            p.next = p.next.next
            continue
        }
        p = p.next
    }
    return tem
}