// const a = "#" + Math.floor(Math.random() * 16777215).toString(16);
// const b = "#" + Math.floor(Math.random() * 16777215).toString(16);
// const c = "#" + Math.floor(Math.random() * 16777215).toString(16);
// const d = "#" + Math.floor(Math.random() * 16777215).toString(16);
// const e = "#" + Math.floor(Math.random() * 16777215).toString(16);
// let boxes=document.getElementsByClassName('boxes');
// boxes[0].style.backgroundColor=a;
// boxes[1].style.backgroundColor=b;
// boxes[2].style.backgroundColor=c;
// boxes[3].style.backgroundColor=d;
// boxes[4].style.backgroundColor=e;

console.log("Script.js initializing");
// const boxes = document.getElementsByClassName('boxes');
let boxes=document.querySelector(".container").children

function getRandomColor(){
    let val1=Math.ceil(0+Math.random()*255);
    let val2=Math.ceil(0+Math.random()*255);
    let val3=Math.ceil(0+Math.random()*255);
    return `rgb(${val1},${val2},${val3})`;
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor=getRandomColor();
    e.style.color=getRandomColor();
})