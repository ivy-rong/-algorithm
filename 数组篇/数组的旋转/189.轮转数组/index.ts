//给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
//输入: nums = [1,2,3,4,5,6,7], k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右轮转 1 步: [7,1,2,3,4,5,6]
// 向右轮转 2 步: [6,7,1,2,3,4,5]
// 向右轮转 3 步: [5,6,7,1,2,3,4]
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/rotate-array
var rotate = function(nums, k) {

    k = k % nums.length
    function overturn(start,end,nums1){
        while(start < end){
            let temp = nums1[start]
            nums1[start] = nums1[end]
            nums1[end] = temp
            start++
            end--
        }
        console.log(nums1)
        return nums1
    };
    overturn(0,nums.length-1,nums)
    overturn(0,k-1,nums)
    overturn(k,nums.length-1,nums)

};