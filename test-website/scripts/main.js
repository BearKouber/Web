let myImage = document.querySelector('img');


myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/flower.png'){
        myImage.setAttribute('src','images/flower2.png');
    }else {
        myImage.setAttribute('src','images/flower.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
        setUserName();
        //此处是空或者null都算做0
    } else {
        localStorage.setItem('name',myName);
        //调用localStorage的API，可以将数据存储在浏览器中供后续获取
        //这里使用setItem()函数来创建一个‘name’数据项，并把myName复制给它
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}
myButton.onclick = function() {
    setUserName();
}