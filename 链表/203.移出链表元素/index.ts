function removeElements(head: ListNode | null, val: number): ListNode | null {
  // 删除头部节点
  while (head !== null && head.val === val) {
    head = head.next
  }
  if (head === null) return head
  let pre: ListNode = head,
    cur: ListNode | null = head.next
  // 删除非头部节点
  while (cur) {
    if (cur.val === val) {
      pre.next = cur.next
    } else {
      //此处不加类型断言时：编译器会认为pre类型为ListNode, pre.next类型为ListNode | null
      pre = pre.next as ListNode
    }
    cur = cur.next
  }
  return head
}

// 节流 函数

function throttle(fun, delay) {
  let lastTimeStamp = 0
  return function (...args: any) {
    const curTimeStamp = Date.now()
    if (curTimeStamp - lastTimeStamp > delay) {
      fun.apply(this, args)
      lastTimeStamp = curTimeStamp
    }
  }
}

// 防抖 触发某个操作时 执行最后一次
function debounce(fun, delay) {
  let timeoutId
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      fun.apply(this, args)
    }, delay)
  }
}
