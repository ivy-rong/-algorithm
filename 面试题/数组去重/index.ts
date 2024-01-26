// 数组去重

const arr = [1, 2, 3, 1]

// es6

const newArr = [...new Set([1, 2, 3, 1])]

// 使用 filter

const newArr2 = arr.filter((item, index) => arr.indexOf(item) === index)

//使用reduce 初始值不传 默认为第一个数

const newArr3 = arr.reduce((acc: number[], cur) => {
  if (!acc.includes(cur)) {
    acc.push(cur)
  }
  return acc
}, [])

//  基本

var arr1 = [1, 2, 3, 3, 4, 4, 5]
var uniqueArr: number[] = []

for (var i = 0; i < arr.length; i++) {
  if (uniqueArr.indexOf(arr1[i]) === -1) {
    uniqueArr.push(arr1[i])
  }
}
