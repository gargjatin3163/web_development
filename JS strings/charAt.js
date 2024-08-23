const a=[12,23,43,54];
for (let i = 0; i < a.length; i++) {
    if(String(a[i]).endsWith('3')){
        console.log(a[i]);
    }
    else{
        continue;
    }
}