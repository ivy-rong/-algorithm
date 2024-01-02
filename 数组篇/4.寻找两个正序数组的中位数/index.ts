//https://leetcode.cn/problems/median-of-two-sorted-arrays/
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const newArr = [...nums1, ...nums2]
  newArr.sort((a, b) => a - b)
  console.log(newArr)

  const length = newArr.length
  if (length === 0) {
    return 0 // 数组为空，无法计算中位数
  }

  if (length % 2 === 0) {
    // 数组长度为偶数，取中间两个数的平均值作为中位数
    const middleIndex = length / 2
    const median = (newArr[middleIndex - 1] + newArr[middleIndex]) / 2
    return median
  } else {
    // 数组长度为奇数，取中间的数作为中位数
    const middleIndex = Math.floor(length / 2)
    const median = newArr[middleIndex]
    return median
  }
}
