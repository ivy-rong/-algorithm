//
function findPoisonedDuration(timeSeries: number[], duration: number): number {
    //中毒总时间
    let ans = 0;
    //中毒过期时间
    let expired = 0;

    for (let i = 0; i < timeSeries.length; ++i) {
        //如果当前时间大于等于过期时间，说明当前中毒还未过期
        if (timeSeries[i] >= expired) {
            ans += duration;
        } else {
            //当前已经中毒过期，ans加上当前时间点与过期时间之差
            ans += timeSeries[i] + duration - expired;
        }
        // 最后，将过期的时间更新为当前时间点加上持续时间，
        expired = timeSeries[i] + duration;
    }
    // 返回中毒总时间
    return ans;
}