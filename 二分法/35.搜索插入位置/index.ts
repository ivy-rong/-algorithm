function searchInsert(nums: number[], target: number): number {
  const isExist = nums.findIndex((item) => item === target)
  if (isExist === -1) {
    //没有这个元素 插入
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= target) {
        return i
      }
    }
    return nums.length
  } else {
    return isExist
  }
}
