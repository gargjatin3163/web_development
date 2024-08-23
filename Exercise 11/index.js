// let a=prompt("Enter a number:");
// let fact=1;
// for(let i=a;i>=1;i--){
//     fact*=i;
// }
// console.log(fact);
let num=4;
let a=[];
for(let i=1;i<=num;i++){
    a.push(i);
}
let b=a.reduce((a,b)=>{return a*b});
console.log(b);