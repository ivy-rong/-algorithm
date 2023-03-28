// 给你一个二叉树的根节点 root ， 检查它是否轴对称。
// /**
//  Definition for a binary tree node.
 class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }
function isSymmetric(root: TreeNode | null): boolean{
    if(root === null) return false
    if(root.left === null || root.right === null) return true
    function dfs(q:null|TreeNode,p:null|TreeNode): boolean{
        if(q === null || p === null)return false
        if(q === null && p === null)return true
        return q.val === p.val && dfs(q.right,p.right) && dfs(q.left,p.left) 
    }
    return dfs(root.left,root.right)
}