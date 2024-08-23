console.log('This is promises');

let prom1=new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("No random number was supporting")
    }
    else{
        setTimeout(() => {
            console.log('Promise 1 resolved');
            resolve("Me");
            }, 2000);
    }
})

prom1.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})