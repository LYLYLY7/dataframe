//首先创建一个节点，节点内容包括值和下一个节点的地址
const createNode = value => {
    return {
        data: value,  //这里，不能删
        next: null
    }
}
//之后以该节点创建一个链表
const createList = value => {
    return createNode(value)
}

//链表的查询（遍历）
const travelList = (list, fn) => {
    let x = list   //x指向链表的头节点
    while (x !== null) {
        fn(x)
        x = x.next
    }
}

//链表末尾节点的增加
const appendList = (list, value) => {
    const node = createNode(value)
    let x = list
    while (x.next) { //如果x所指向的下一个节点存在
        x = x.next   //一直访问到最后一个节点                 神来之笔
    }
    x.next = node //此时在节点后面再次创建一个节点
    return node
}

//链表节点的删除
const removeFromList = (list, node) => {
    let x = list //x指向链表的头节点
    let p = node //p指向x的上一个节点
    while (x !== p && x !== null) {
        p = x;
        x = x.next;   //神来之笔
    }
    if (x == null) { //链表为空，无法删除
        return false
    } else if (x === p) { //要删除的节点是头节点
        p = x.next  //p指向x的下一个节点（此时完成删除头结点的操作）
        return p  //p返回新的头节点
    } else {
        //p = x
        //x = x.next   要把上面的while语块删除才能删掉注释格式
        p.next = x.next
        return list
    }
}
const list = createList(10);
const node2 = appendList(list, 20);
const node3 = appendList(list, 30);
const node4 = appendList(list, 40);
removeFromList(list, node3);
travelList(list, node => {
    console.log(node.data);
});
console.log("list");
console.log(list);