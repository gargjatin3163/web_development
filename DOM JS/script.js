// let element=document.firstElementChild;
// let element=document.firstElementChild.childNodes;
let element=document.firstElementChild.children[1].nextElementSibling;
console.log(element);

let boxes=document.getElementsByClassName("box");
console.log(boxes);

boxes[2].style.backgroundColor="red";

document.getElementById("red").style.backgroundColor="red";

document.querySelectorAll(".box").style.backgroundColor="green";
document.querySelector('body').contains(document.querySelector('container'));