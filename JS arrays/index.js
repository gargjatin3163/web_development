let a=[1,93,5,6,88];
a.forEach((value,index,arr)=>{
    console.log(value,index,arr);
})

let obj={
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element);
    }
}

for (const value of a) {
    console.log(value);
}

let arr=[1,13,5,7,11];
// let newArr=[];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newArr.push(element**2);
    
// }

let newArr=arr.map((e)=>{return e**2});
console.log(newArr);

let num=arr.reduce((a,b)=>{return (a+b)})