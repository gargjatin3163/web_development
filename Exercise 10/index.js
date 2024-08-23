let a=Math.floor((Math.random()*3))+1;
let b=Math.floor((Math.random()*3))+1;
let c=Math.floor((Math.random()*3))+1;
function adj(){
    if(a==1){
        return "Crazy";
    }
    else if(a==2){
        return "Amazing";
    }
    else if(a==3){
        return "Fire";
    }
}
function shop(){
    if(b==1){
        return "Engine";
    }
    else if(b==2){
        return "Foods";
    }
    else if(b==3){
        return "Garments";
    }
}
function word(){
    if(c==1){
        return "Bros";
    }
    else if(c==2){
        return "Limited";
    }
    else if(c==3){
        return "Hub";
    }
}
console.log(adj()+" "+shop()+" "+word());