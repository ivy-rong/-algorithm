// 给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。

// 示例 1：
// 输入：nums = [1,1,0,1,1,1]
// 输出：3
// 解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.

function findMaxConsecutiveOnes(nums: number[]): number {
    let maxcount = 0
    let count = 0
    nums.map((item) => {
        if (item === 1) {
            count++
        } else {
            count = 0
        }
        if (maxcount < count) {
            maxcount = count
        }
    })
    return maxcount
};