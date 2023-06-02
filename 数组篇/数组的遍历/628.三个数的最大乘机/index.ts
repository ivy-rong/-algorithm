// 给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积。

// 输入：nums = [1,2,3]
// 输出：6
// 1.全是整数就是最后三个数相乘 2.有负数就是最小的两个负数和最大的正数相乘
function maxmumProduct(nums:number[]):number｛
    nums.sort((a,b)=>b-a)
    return Math.max(nums[0]*nums[1]*nums[2],nums[nums.length-1]*nums[0])
｝