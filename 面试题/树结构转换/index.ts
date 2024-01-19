// 树转换

let arr = [
  { id: '1', pId: '' },
  { id: '2', pId: '1' },
  { id: '3', pId: '2' },
  { id: '4', pId: '3' },
  { id: '5', pId: '' },
  { id: '6', pId: '5' }
]

interface ArrType {
  id: string
  pId: string
}

let newArr = [
  {
    id: '1',
    pId: '',
    children: [
      { id: '2', pId: '1', children: [{ id: '3', pId: '2' }] },
      { id: '7', pId: '1' }
    ]
  },
  { id: '4', pId: '' },
  { id: '5', pId: '', children: [{ id: '6', pId: '5' }] }
]
interface TreeNode {
  id: string
  pId: string
  children?: TreeNode[]
}

function trf(arr: ArrType[]): TreeNode[] {
  const newArr: TreeNode[] = []
  const pArr: ArrType[] = []

  let count = 0
  const childArr: ArrType[] = []
  const arrLength = arr.length

  // 初次循环遍历根节点
  // for (let obj of arr) {
  //   if (!obj.pId) {
  //     pArr.push(obj)
  //     count += 1
  //   } else {
  //     childArr.push(obj)
  //   }
  // }
  // 把所有子节点添加到跟节点下

  //   // 循环便利子节点
  //   for (let obj of childArr) {
  //     // 找出父亲节点
  //     const pid = obj.pId
  //     for (let i = 0; i < arrLength; i++) {
  //       if (pid === arr[i].id) {
  //         arr[i].child = obj
  //         conut += 1
  //       }
  //     }

  // }
  // return newArr
}
trf(arr)
