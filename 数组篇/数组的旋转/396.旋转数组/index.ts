// 给定一个长度为 n 的整数数组 nums 。
// 假设 arrk 是数组 nums 顺时针旋转 k 个位置后的数组，我们定义 nums 的 旋转函数  F 为：
// F(k) = 0 * arrk[0] + 1 * arrk[1] + ... + (n - 1) * arrk[n - 1]
// 返回 F(0), F(1), ..., F(n-1)中的最大值 。
// 生成的测试用例让答案符合 32 位 整数。
// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/rotate-function


function maxRotateFunction(nums: number[]): number {
    //超出时间限制
    // let leng = nums.length
    // function rotate(start:number,end:number,num:number[]){
    //     let m = end - start
    //     if( m % leng === 0){
    //         return num
    //     }
    //     while(end > start){
    //         let temp = num[start]
    //         num[start] = num[end]
    //         num[end] = temp
    //         end--;
    //         start++;
    //     }

    // }
    // function sum( nums1:number[] ){
    //     let sum = 0
    //     for(let i = 0 ; i < nums1.length; i++  ){
    //         sum += i * nums1[i]
    //     }
    //     return sum
    // }
    // let res = sum(nums)
    // for(let i = 1 ; i < leng; i++ ){
    //      rotate(0, leng - 1 - 1, nums);
    //     //  rotate(leng - i + 1, leng - 1, nums);
    //      rotate(0, leng - 1, nums);
    //     if(res < sum(nums) ) {
    //         res = sum(nums)
    //     }
    // }
    // return res

    //数学方法 向右旋转一次，就相当于把当前结果加上整个数组的和，再减去数组大小乘以当前最后一位。想到这个就很简单了
    function sum( nums1:number[] ){
        let sum = 0
        for(let i = 0 ; i < nums1.length; i++  ){
            sum += i * nums1[i]
        }
        return sum
    }
    let res = sum(nums)
    let max = res
    const oginSum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const leng = nums.length
    for(let i = 1; i < leng ; i++){

        res = res +  oginSum - leng * nums[leng - i]
        if(max < res){
            max = res
        }
    }
    return max
};




