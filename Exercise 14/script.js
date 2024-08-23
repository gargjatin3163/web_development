// async function hacking() {
//     let text=document.querySelector(".container");
//     setTimeout(() => {
//         text.innerHTML="Initializing hacking...";
//     }, 1000);
//     setTimeout(() => {
//         text.innerHTML="Reading your Files...";
//     }, 1000);
//     setTimeout(() => {
//         text.innerHTML="Password files Detected...";
//     }, 1000);
//     setTimeout(() => {
//         text.innerHTML="Sending all passwords and personal files to server...";
//     }, 1000);
//     setTimeout(() => {
//         text.innerHTML="Cleaning up...";
//     }, 1000);
// }
// hacking();
const randomDelay=()=>{
    return new Promise((resolve,reject)=>{
        timeout=1+2*Math.random();
        setTimeout(()=>{
            resolve()
        },timeout*1000)
    })
}
async function main(){

    let t=setInterval(() => {
        let last=document.body.
        lastElementChild;
        if(last.innerHTML.endsWith('...')){
            last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3);
        }
        else{
            last.innerHTML=last.innerHTML+"."   
        }
    }, 100);
    let text=["Initializing hacking","Reading your Files","Password files Detected","Sending all passwords and personal files to server","Cleaning up"];
    
    
    const addItem=async (item)=>{
        await randomDelay();
        let div=document.createElement("div");
        div.innerHTML=item;
        document.body.append(div);
    }
    for (const item of text) {
        await addItem(item);
    }
    await randomDelay();
    clearInterval(t);
}
main();