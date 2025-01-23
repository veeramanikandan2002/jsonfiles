
function  countLoanOnes(num){
    let count=0;
    
    let numtostr=num.toString().split('');
    
    for(let i=0;i<numtostr.length;i++){
        if(numtostr[i]==='1'&& numtostr[i+1]!=='1'&&numtostr[i-1]!=='1'){
           count++;
        }
        else{
            count;
        }
    }
       console.log( "Count of loanOnes = "+count);
    }
    countLoanOnes(1011101);