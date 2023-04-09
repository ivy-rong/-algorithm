// 414. 第三大的数
// 给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。

// 示例 1：
// 输入：[3, 2, 1]
// 输出：1
// 解释：第三大的数是 1 


function thirdMax(nums: number[]): number {
    const arr:number[] = [...new Set(nums)].sort((a,b)=>{return a-b})
    console.log(arr)
    if(arr.length < 3){
        return arr[arr.length - 1]
    }
    return arr[arr.length - 3]
};