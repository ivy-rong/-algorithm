// 给你一个长度为 n 的整数数组，每次操作将会使 n - 1 个元素增加 1 。返回让数组所有元素相等的最小操作次数。
//
// 输入：nums = [1,2,3]
// 输出：3
// 解释：
// 只需要3次操作（注意每次操作会增加两个元素的值）：
// [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
// 示例 2：
//
// 输入：nums = [1,1,1]
// 输出：0

function minMoves(nums: number[]): number {
    // let res = 0
    // let max = Math.max(...nums)
    // let min = Math.min(...nums)
    // while(min !== max){
    //     let s = max - min
    //     res += s
    //     let  index = nums.indexOf(max)

    //     for(let i = 0; i < nums.length ; i++){
    //         if(index !== i){
    //             nums[i] = nums[i] + s
    //         }
    //     }
    //     max =  Math.max(...nums)
    //     min = Math.min(...nums)

    // }
    // return res


    let res = 0
    let max = Math.max(...nums)
    let min = Math.min(...nums)
    let length = nums.length
    let  index = nums.indexOf(min)
    for(let i = 0 ; i < length ; i++ ){
        if(i !== index){
            res += nums[i] - min
        }
    }
    return res

};