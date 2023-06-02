
//给你一个 m 0行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。




function spiralOrder(matrix: number[][]): number[] {
    let res: number[] = [];
    let top = 0, bottom = matrix.length, left = 0, right = matrix[0].length;
    let direction = 0;
    for (let i = 0, m = 0, n = 0; i < matrix.length * matrix[0].length; i++) {
        res[i] = matrix[m][n];
        switch (direction) {
            case 0:
                if (n + 1 < right) {
                    n++;
                } else {
                    m++;
                }
                if (n + 1 >= right) {
                    direction = 1;
                    top++;
                }
                break;
            case 1:
                m++;
                if (m + 1 >= bottom) {
                    direction = 2;
                    right--;
                }
                break;
            case 2:
                n--;
                if (n - 1 < left) {
                    direction = 3;
                    bottom--;
                }
                break;
            case 3:
                m--;
                if (m - 1 < top) {
                    direction = 0;
                    left++;
                }
                break;
        }
    }
    return res;
};
