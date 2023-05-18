// 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。
//
// 输入：nums = [4,3,2,7,8,2,3,1]
// 输出：[5,6]
// 示例 2：
//
// 输入：nums = [1,1]
// 输出：[2]
function findDisappearedNumbers(nums: number[]): number[] {
    const tag:number[] = new Array(nums.length + 1).fill(0)
    const res = []
    console.log(tag)
    for (const item of nums) {
        tag[item] = 1
    }
    for(let i = 1; i < tag.length; i++){
        if(tag[i] === 0){
            res.push(i)
        }
    }
    // console.log(res)
    // res.splice(0,1)
    // console.log(res)
    return res
};