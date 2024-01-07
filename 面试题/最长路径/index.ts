// 给定一棵多叉树，求出这棵树的直径，即树上最远两点的距离。
// 包含n个结点，n-1条边的连通图称为树。
// 示例1的树如下图所示。其中4到5之间的路径最长，是树的直径，距离为5+2+4=11
class TreeNode {
  val: number
  children: TreeNode[]
  constructor(val: number) {
    this.val = val
    this.children = []
  }
}

function diameterOfTree(root: TreeNode | null): number {
  let diameter = 0

  function depth(node: TreeNode | null): number {
    if (node === null) return 0
    let maxDepth1 = 0
    let maxDepth2 = 0
    for (const child of node.children) {
      const childDepth = depth(child)
      if (childDepth > maxDepth1) {
        maxDepth2 = maxDepth1
        maxDepth1 = childDepth
      } else if (childDepth > maxDepth2) {
        maxDepth2 = childDepth
      }
    }

    diameter = Math.max(diameter, maxDepth1 + maxDepth2)

    return maxDepth1 + 1
  }

  depth(root)

  return diameter
}
