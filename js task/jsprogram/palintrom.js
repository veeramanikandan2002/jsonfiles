let word="xyza123ww";
let revvalue="";
for(let i=word.length-1;i>=0;i--){
    revvalue+=word[i];
}
console.log(revvalue);
if(word===revvalue){
    console.log(true);
}
else{
    console.log(false);
}