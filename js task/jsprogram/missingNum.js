let n=[10,10,3,4,7,12,6,7,8,14]
let  result="", num=false;

let sortnum=n.sort((a,b)=>a-b);

let maxval=sortnum[sortnum.length-1];

for(let i=1;i<=maxval;i++){
    num=false;
    for(let j=0;j<sortnum.length;j++){
       
        if(i===sortnum[j]){
            num=true;
            break;
        }
    }
    if(num===false){
     result+=i+"," ;  
    }
}
console.log( "the missing number in the array is :"+result)