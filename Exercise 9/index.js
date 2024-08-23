let a=Number(prompt("Enter number a:"));
let b=Number(prompt("Enter number b:"));
let op=prompt("Enter any operator of your choice: +,-,/,*");
function faulty(){
    if(op==="+"){
        alert(a-b);
    }
    else if(op=="-"){
        alert(a/b);
    }
    else if(op=="/"){
        alert(a**b);
    }
    else if(op=="*"){
        alert(a+b);
    }
    else{
        alert("Invalid operator");
    }
}
function correct(){
    if(op==="+"){
        alert(a+b);
    }
    else if(op=="-"){
        alert(a-b);
    }
    else if(op=="/"){
        alert(a/b);
    }
    else if(op=="*"){
        alert(a*b);
    }
    else{
        alert("Invalid operator");
    }
}
let k = Math.random();
if(k<0.1){
    faulty();
}
else{
    correct();
}