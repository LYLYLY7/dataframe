//创建一个树
//只有一个节点不算数组，如果头节点后面跟着三个孩子，则三个孩子算是一个数组
const createTree = value => {
    return {
        data: value,
        children: null,
        parent: null,
    }
}

//遍历 树
const travel = (tree, fn) => {
    fn(tree)
    if (!tree.children) {
        console.log(`tree no exist`)
    }
    //遍历子树（递归）
    for (let i = 0; i < tree.children.length; i++) {
        travel(tree.children[i], fn)
    }
}
//查询树（递归）
const find = (tree, node) => {
    if (tree === node) { //只有一个节点
        return tree
    } else if (tree.children) { //节点的孩子存在
        for (let i = 0; i < tree.children.length; i++) {
            const result = find(tree.children[i], node)
            if (result) {
                return result
            }

        }
        return undefined
    } else {
        return undefined
    }
}

//增加节点
const addChild = (node, value) => {
    const newNode = {
        data: value,
        children: null,
        parent: node,
    }
    node.children = node.children || [] //？？？
    node.children.push(newNode)
    return newNode
}

//删除节点
const removeNode = (tree, node) => {
    const siblings = node.parent.children//兄弟节点
    let index = 0//索引
    for (let i = 0; i < siblings.length; i++) {
        if (siblings[i] === node) { //node指向要删除的节点
            index = i
        }
    }
    siblings.splice(index, 1) //之所以这么删除，是因为孩子构成一个数；从index开始删除一个节点

}

const tree = createTree(10);
const node2 = addChild(tree, 20);
const node3 = addChild(tree, 30);
addChild(tree, 40);
const node5 = addChild(tree, 50);
addChild(node2, 201);
addChild(node2, 202);
addChild(node2, 203);
addChild(node2, 204);
console.log(tree);
const fn = node => {
    console.log(node.data);
};
removeNode(tree, node5);
console.log(tree);
console.log(tree.children.length)