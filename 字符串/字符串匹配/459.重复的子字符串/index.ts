//https://leetcode.cn/problems/repeated-substring-pattern/

function repeatedSubstringPattern(s: string): boolean {
    return (s + s).indexOf(s,1) !== s.length
}