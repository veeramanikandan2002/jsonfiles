let word="Make  uoy only esrever sdrow of ddo length";
let find="";
 let joinAllwords="";
let seperatewords=word.split(" ");
for(elem of seperatewords ){
    find=elem;
 if(find.length%2!==0){
    let reverseword=find.split("").reverse().join("");
   joinAllwords+=reverseword+" ";
 }
 else{
    joinAllwords+=find+" ";
    }
 }
  console.log(joinAllwords)