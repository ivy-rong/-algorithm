// 输入: [1，2，3，4，6，8，9，18]
// 输出:["1-4"，6，"8-18"]
const lianxu = (nums:number[]):string[]=>{
    let slow = 0;
    const res:string[]=[];
    let fast = slow + 1;
    while(fast < nums.length ){
        if(nums[fast]===nums[slow]){
            fast++
            slow++
        }else{
            
        }
    }
}