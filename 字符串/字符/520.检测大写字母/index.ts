//https://leetcode.cn/problems/detect-capital/

//开头大写 匹配多个小写字母
const regex = /^[A-Z][a-z]+$/

function detectCapitalUse(word: string): boolean {
  if (/^[A-Z]+$/.test(word) || /^[a-z]+$/.test(word)) return true
  return /^[A-Z][a-z]*$/.test(word)
}
