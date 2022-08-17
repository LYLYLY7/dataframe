const divScreen = document.querySelector('#screen'); //用选择器指向id为screen的标签
const btnCreateNumber = document.querySelector('#createNumber');
const btnCallNumber = document.querySelector('#callNumber');
const spanNewNumber = document.querySelector('#newNumber');
const spanQueue = document.querySelector("#queue");

let n = 0;
let queue = [];
btnCreateNumber.onclick = () => { //创建一个点击事件
    n += 1
    //queue.push(n)
    queue.push.call(queue, n)//利用call更全面，就是将n加入队列queue里面
    spanNewNumber.innerText = n//设置为html里面的当前号码：n
    spanQueue.innerText = JSON.stringify(queue)// innerText是字符串，JSON.stringify(queue)便是把数组变成字符串
};
btnCallNumber.onclick = () => { //创建点击事件
    if (queue.length === 0) {
        console.log('当前暂无订餐');
    }
    //const m  = queue.shift()
    const m = queue.shift.call(queue) //shift，删除数组的第一个元素，并且返回第一个元素
    divScreen.innerText = `请 ${m} 号就餐 `
    spanQueue.innerText = JSON.stringify(queue)
}