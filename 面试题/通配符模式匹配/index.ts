// console.log(isMatch('acd', 'a?d')); // true
// console.log(isMatch('ab', 'a*b')); // true
// console.log(isMatch('mississippi', 'm??*ss*?i*pi')); // false

// 以下是一个使用递归的 TypeScript 实现，用于支持 '?' 和 '*' 的通配符模式匹配：

function isMatch(s: string, p: string): boolean {
  // 如果模式字符串为空，只有当目标字符串也为空时才匹配
  if (p.length === 0) {
    return s.length === 0
  }

  // 如果模式字符串的第一个字符是 '*'，可以匹配任意字符序列
  if (p[0] === '*') {
    // 尝试逐个匹配目标字符串的子串
    for (let i = 0; i <= s.length; i++) {
      if (isMatch(s.substring(i), p.substring(1))) {
        return true
      }
    }
  }

  // 如果目标字符串非空且模式字符串的第一个字符与目标字符串的第一个字符匹配，或者模式字符串的第一个字符是 '?'
  if (s.length !== 0 && (s[0] === p[0] || p[0] === '?')) {
    return isMatch(s.substring(1), p.substring(1))
  }

  return false // 字符不匹配
}

function isMatch2(s: string, p: string) {
  if (p.length === 0) {
    return s.length === 0
  }

  if (p[0] === '*') {
    // 尝试逐个匹配目标字符串的子串
    for (let i = 0; i <= s.length; i++) {
      if (isMatch(s.substring(i), p.substring(1))) {
        return true
      }
    }
  }

  if (s.length !== 0 && (s[0] === p[0] || p[0] === '?')) {
    return isMatch(s.substring(1), p.substring(1))
  }
}
