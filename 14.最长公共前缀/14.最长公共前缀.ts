function longestCommonPrefix(strs:string[]):string{
    if(strs.length === 1){
        return strs[0];
    }

    //接着，使用 `strs.sort()` 方法对字符串数组进行排序，
    // 并将该排序后的数组存入 `strs` 中。排序的逻辑是如果字符串相等，
    //则返回 0，如果字符串 a 大于 b，则返回 1，否则返回 -1。排序后，
    //取出 `strs` 数组中第一个字符串（即最短的字符串）并将其存入 `shortest` 变量中，取出最后一个字符串（即最长的字符串）并将其存入 `longest` 变量中。
    strs = strs.sort((a,b) => {
        return a===b? 0: a > b ? 1 : -1
    })//升序
    
    const shortest  = strs[0]
    const longest = strs[strs.length - 1]
    let prefix = ''
    for(let index = 0;index<shortest.length;index++){
        if(shortest[index] === longest[index]){
            prefix = prefix + shortest[index]
        }else{
            return prefix
        }
    }
    return prefix
}