function insertWhiteSpace(word){
    let joinAllwords="";
   let find= word.split('');
   let firstelem=find[0];
    for(let elem of find){
        if(elem===elem.toUpperCase() &&elem!==firstelem){
        joinAllwords+=" "+elem;
    }
    else{
        joinAllwords+=elem
    }
    }
    return joinAllwords;
   }
   console.log(`"${insertWhiteSpace("TheGreatestUpsetInHistory")}"`)