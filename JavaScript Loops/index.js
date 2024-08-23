console.log("I am tutorial on loops")

for (let i = 0; i < 10; i++) {
    console.log(i+1);
}

let obj={
    name:"John",
    age:30,
    city:"New York"
}

for(const key in obj){
    console.log(key,obj[key]);
}

for (const c of 'Hello') {
    console.log(c)
}