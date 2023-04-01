function climbStairs(n: number): number {
    // 1,2,3,4,5,
    // 1,2,3,5,8

    // let t = 0;
    // let q = 1;
    // let p = 1;
    // let i = 2;
    // while( i <= n){
    //     t = q;//1  
    //     q = p;//1
    //     p = t + q;//1 
    //     i++
    // }
    // let sum = 0
    // if(n==1){
    //     sum = 1
    // }
    // if(n===2){
    //     sum = 2
    // }
    // sum = climbStairs(n-1)+climbStairs(n-2)
    // return sum

    const dp = []
    dp[0]=0;
    dp[1]=1;
    dp[2]=2
    if(n <= 2) return n
    for(let i = 3; i <= n;i++){
        dp[i] = dp[i-1]+dp[i-2]
    }
    return dp[n]
};