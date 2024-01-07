// 删除给出链表中的重复元素（链表中元素从小到大有序），使链表中的所有元素都只出现一次
// 例如：
// 给出的链表为,返回.
// 给出的链表为,返回.

// 数据范围：链表长度满足 ，链表中任意节点的值满足
// 进阶：空间复杂度 ，时间复杂度

class ListNode {
  val: number
  next: ListNode | null

  constructor(val: number, next: ListNode) {
    this.val = val
    this.next = next
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) return null
  let current = head
  while (current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }

  return current
}
