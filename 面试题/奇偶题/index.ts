// 输入一个长度为 n 整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前面部分，所有的偶数位于数组的后面部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。

function reorderArray(arr: number[]): number[] {
  const result: number[] = [];
  const oddArr: number[] = [];
  const evenArr: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i]); // 将偶数放入偶数数组
    } else {
      oddArr.push(arr[i]); // 将奇数放入奇数数组
    }
  }

  let oddIndex = 0;
  let evenIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(evenArr[evenIndex]); // 先放偶数数组中的元素
      evenIndex++;
    } else {
      result.push(oddArr[oddIndex]); // 再放奇数数组中的元素
      oddIndex++;
    }
  }

  return result;
}