// 给你两个字符串 word1 和 word2 。请你从 word1 开始，通过交替添加字母来合并字符串。如果一个字符串比另一个字符串长，就将多出来的字母追加到合并后字符串的末尾。
// 返回 合并后的字符串 。

// 输入：word1 = "abc", word2 = "pqr"
// 输出："apbqcr"
function mergeAlternately(word1: string, word2: string): string {
    let res = ''
    let len1 = word1.length
    let len2 = word2.length
    for(let i = 0; i < Math.min(len1,len2); i++){
        res += word1[i] + word2[i]
    }
    if(len1 > len2){
        res += word1.slice(len2)
    }else if(len1 < len2){
        res += word2.slice(len1)
    }
    return res
}