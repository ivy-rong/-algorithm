// 48. 旋转图像
// 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
// 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
// https://leetcode.cn/problems/rotate-image/

function rotate(matrix: number[][]): void {
    // let len = matrix.length
    // for(let i = 0 ; i < len; i++){
    //     let t = []
    //     for(let j = len -1 ; j >= 0 ; j--){
    //         t.push(matrix[j][i])
    //     }
    //     matrix.push(t)
    // }
    // matrix.splice(0,len)


    let len = matrix.length
    for(let i = 0; i < len ;i++){
        let t = []
        for(let j = 0; j < len ;j++){
            t.push(matrix[len-1-j][i])
            console.log(matrix[j][i], '-------------',j,i)
        }
        matrix.push(t)
        console.log(t)
    }
    matrix.splice(0,len)
};