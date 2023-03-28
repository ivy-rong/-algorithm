// 给你一个二叉树的根节点 root ， 检查它是否轴对称。
// /**
//  Definition for a binary tree node.
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function isSymmetric(root) {
    if (root === null)
        return false;
    if (root.left === null || root.right === null)
        return true;
    function dfs(q, p) {
        if (q === null || p === null)
            return false;
        if (q === null && p === null)
            return true;
        return q.val === p.val && dfs(q.right, p.right) && dfs(q.left, p.left);
    }
    return dfs(root.left, root.right);
}
