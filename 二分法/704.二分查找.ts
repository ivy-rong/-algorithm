function search(nums: number[], target: number): number {
    // 1 3 5 7 9 

    let  s = 0;
    let  e = nums.length-1;
    let mid = Math.floor((s + e) / 2);
    while(nums[mid] !== target && e > s){
        if(nums[mid] > target){
            e = mid - 1;
        }else{
            s = mid + 1;
        }
        mid = Math.floor((s + e) / 2);
    }
    return (nums[mid] !== target)? -1:mid;

};