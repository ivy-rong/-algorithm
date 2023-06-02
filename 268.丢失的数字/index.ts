// 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。

// 示例 1：
// 输入：nums = [3,0,1]
// 输出：2
// 解释：n = 3，因为有 3 个数字，所以所有的数字都在范围 [0,3] 内。2 是丢失的数字，因为它没有出现在 nums 中。
function missingNumber(nums: number[]): number {
    const  n = nums.length
    console.log(n)
    const arr = Array(n).fill(0)
    nums.map((item,index)=>{
        arr[item] = 1 
    })
    console.log(arr)
    for(let i = 0;i < arr.length; i++){
        if(arr[i] === 0){
            return i
        }
    }
    if (nums.length !== nums[nums.length - 1]) {
        return nums.length;
    }
};