// 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。

// 示例 1：
// 输入：head = [1,1,2]
// 输出：[1,2]
//定义链表
class ListNode{
    val:number
    next:ListNode|null
    constructor(val?:number,next?:ListNode|null){
        this.val = (val === undefined? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
function deleteDuplicates(head:ListNode | null):ListNode | null{
    let cur = head
    while(cur&&cur.next){
        if(cur.val === cur.next.val){
            cur.next = cur.next.next
        }else{
            cur = cur.next
        }
    }
    return head
}