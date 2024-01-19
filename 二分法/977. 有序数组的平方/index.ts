//https://leetcode.cn/problems/squares-of-a-sorted-array/description/
function sortedSquares(nums: number[]): number[] {
  const arr: number[] = []
  let leng = nums.length - 1
  for (let i = 0, j = leng - 1; i <= j; ) {
    if (nums[i] * nums[i] > nums[j] * nums[j]) {
      arr[leng] = nums[i] * nums[i]
      i++
      console.log(arr[leng], 'ida')
    } else {
      arr[leng] = nums[j] * nums[j]
      j--
      console.log(arr[leng], 'jda')
    }

    leng--
  }
  return arr
}
