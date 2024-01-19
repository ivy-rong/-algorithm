// https://leetcode.cn/problems/remove-element/
function removeElement(nums: number[], val: number): number {
  const leng = nums.length

  let low = 0
  for (let fast = 0; fast < leng; fast++) {
    if (nums[fast] !== val) {
      nums[low] = nums[fast]
      low++
    }
  }
  console.log(nums, low)
  return low
}
