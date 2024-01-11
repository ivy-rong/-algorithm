//目标不再数组范围内

//目标target 在数组范围中，且数组中不存在target

//target 在数组范围中，且数组中存在target

function getRightBorder(nums: number[], target: number): number {
  let left: number = 0,
    right: number = nums.length - 1
  // 0表示target在nums区间的左边
  let rightBoard: number = 0
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] <= target) {
      // 右边界一定在mid右边（不含mid）
      left = mid + 1
      rightBoard = left
    } else {
      // 右边界在mid左边（含mid）
      right = mid - 1
    }
  }
  return rightBoard
}
