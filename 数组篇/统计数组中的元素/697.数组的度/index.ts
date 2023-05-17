// 给定一个非空且只包含非负数的整数数组 nums，数组的 度 的定义是指数组里任一元素出现频数的最大值。
// 你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。

// 示例 1：
// 输入：nums = [1,2,2,3,1]
// 输出：2
// 解释：
// 输入数组的度是 2 ，因为元素 1 和 2 的出现频数最大，均为 2 。
// 连续子数组里面拥有相同度的有如下所示：
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// 最短连续子数组 [2, 2] 的长度为 2 ，所以返回 2 。
// 示例 2：
// 输入：nums = [1,2,2,3,1,4,2]
// 输出：6
// 解释：
// 数组的度是 3 ，因为元素 2 重复出现 3 次。
// 所以 [2,2,3,1,4,2] 是最短子数组，因此返回 6 。




function findShortestSubArray(nums: number[]): number {
    //找重数
    const counts:{} = {}
    for(const item of nums){
        if(item in counts){
            console.log()
            counts[item]++
        }else{
            counts[item]= 1
        }
    }
    console.log(counts)
    let multi = []
    let maxCount = 0
    for (const key in counts) {
        if(counts[key] === maxCount){
            multi.push(Number(key))
        }
        if(counts[key] > maxCount){
            maxCount = counts[key]
            multi = [Number(key)]
        }

    }
    //记住第一个重数出现的位置 和最后一个出现的位置  位置相减得答案
    let res = nums.length
    console.log(multi)
    for(let i = 0; i < multi.length; i++ ){
        console.log(nums.lastIndexOf(multi[i]) - nums.indexOf(multi[i]))
        if((nums.lastIndexOf(multi[i]) - nums.indexOf(multi[i])) < res){
            res = nums.lastIndexOf(multi[i]) - nums.indexOf(multi[i])
            console.log(res)
        }
    }
    return res + 1
};