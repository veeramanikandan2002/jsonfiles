let word="aabcefxiceb";
let findnum;
let num=false;
for(let i=0;i<word.length;i++){
    num=false;
    for(let j=0;j<word.length;j++){
        if( i !==j&&word[i]===word[j]){
           num=true;
            break;
        }
        
    }
    if(num==false){
        findnum=word[i];
        break;
    }
}
console.log( "first non repiding number is="+findnum);



 








