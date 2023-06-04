// 在 MATLAB 中，有一个非常有用的函数 reshape ，它可以将一个 m x n 矩阵重塑为另一个大小不同（r x c）的新矩阵，但保留其原始数据
// 给你一个由二维数组 mat 表示的 m x n 矩阵，以及两个正整数 r 和 c ，分别表示想要的重构的矩阵的行数和列数。
// 重构后的矩阵需要将原始矩阵的所有元素以相同的 行遍历顺序 填充。
// 如果具有给定参数的 reshape 操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/reshape-the-matrix
function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    // if(mat === []){ return  mat }
    // let allCount = mat.length * mat[0].length
    // if(allCount !== r * c){ return mat}
    // let res = new Array(r);
    // for (let i = 0; i < r; i++) {
    //     res[i] = new Array(c);
    // }
    // let rows = 0
    // let cols = 0

    // for (let row of mat) {
    //     for (let element of row) {
    //          res[rows][cols] = element
    //          if( cols >= c - 1 ) {
    //              rows++
    //              cols=0
    //         }else{
    //             cols++
    //         }
    //     }
    // }
    // return res

    //答案
    let mergeArray = [];
    for (let i = 0; i < mat.length; i++) {
        mergeArray.push(...mat[i])
    }
    //validate
    if(mergeArray.length !== (r * c))return mat
    //fixed
    let matrixArray = [];
    let _tempArr:number[];
    for (let i = 0; i < r; i++) {
        _tempArr = [...mergeArray];
        matrixArray.push(_tempArr.splice(i * c, c))
    }
    return matrixArray
};