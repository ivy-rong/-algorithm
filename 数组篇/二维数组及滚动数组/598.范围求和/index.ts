// 给你一个 m x n 的矩阵 M ，初始化时所有的 0 和一个操作数组 op ，其中 ops[i] = [ai, bi] 意味着当所有的 0 <= x < ai 和 0 <= y < bi 时， M[x][y] 应该加 1。
//
// 在 执行完所有操作后 ，计算并返回 矩阵中最大整数的个数 。
function maxCount(m: number, n: number, ops: number[][]): number {
    if(ops.length === 0){
        return m*n
    }
    let rowMin = ops[0][0];
    let colMin = ops[0][1];
    let opsLength = ops.length
    for(let i = 0 ; i < opsLength ; i++){
        if(ops[i][0] < rowMin){
            rowMin = ops[i][0]
        }
        if(ops[i][1] < colMin){
            colMin = ops[i][1]
        }
    }
    return rowMin*colMin

};