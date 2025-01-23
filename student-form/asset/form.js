
let nameinput = document.getElementById("form-name-inputs");
let roll = document.getElementById("form-roll-inputs");
let email = document.getElementById("form-email-inputs");
let dob = document.getElementById("form-dob-inputs");
let age = document.getElementById("form-age-inputs");
let gender = document.getElementById("form-gender-inputs");
let female=document.getElementById("form-gender-female-inputs")
let classInput = document.getElementById("form-class-inputs");
let textArea = document.getElementById("form-text-inputs");
let myform = document.getElementById("form-data");
 let nameatt = document.getElementById("name-att");
 let textareapara=document.getElementById("textarea-p");

myform.addEventListener('submit', function (event) {
    event.preventDefault();

    if((userfun()==""||userfun()==undefined)||(rollfun()==""||rollfun()==undefined)||
    (emailfun()==""||emailfun()==undefined)||
  ( dobfunction()==""||dobfunction()==undefined)||agefun()==""||(genderfun()==""||genderfun()==undefined)||
    classfun()==""|| (textareafun()==""||textareafun()==undefined)){
    alert(" Please Enter All field correctly");
    
   }
   else {
   insert();
    // dobfun();
    myform.reset();
    
   }
});


function dobfun() {
    let dob = document.getElementById("form-dob-inputs").value;
    let dateofbirth = dob;
    let newDate = new Date(dateofbirth);
    let diff = Math.abs(new Date() - newDate);
    let difinedate = diff / (1000 * 60 * 60 * 24 * 365);
    age.value = +(Math.floor(difinedate));
}




    function insert(){
    let usertable = document.getElementById("usertable");
    let newRow = usertable.insertRow();
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    let cell7 = newRow.insertCell(6);
    let cell8 = newRow.insertCell(7);

 cell1.innerHTML=userfun();
 cell2.innerHTML=rollfun();
cell3.innerHTML=emailfun();
  cell4.innerHTML= dobfunction();
  cell5.innerHTML= agefun();
  cell6.innerHTML= genderfun();
   cell7.innerHTML=classfun()
   cell8.innerHTML= textareafun();

}

let checkstr=/^[A-Za-z]+$/; 
    function userfun() {
        let nameatt = document.getElementById("name-att");
        if (!checkstr.test(nameinput.value)) {
          nameatt.textContent="enter  the correct name";
         nameinput.style.border="1px solid red"
        }
        else{
            nameatt.textContent=" ";
            nameinput.style.border="";
            return nameinput.value;
        }
    }
    

    function rollfun() {
        let rollcheck = document.getElementById("roll-att");
       if(!checkstr.test(roll.value)){
        rollcheck.textContent="Enter correct roll name";
        roll.style.border="1px solid red"
    }
        else{
            rollcheck.textContent=" ";
              roll.style.border=""
        return  roll.value;
        }
    }
   
   let emailvalitade=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/; 
    function emailfun() {
        let emailcheck=document.getElementById("email-check");
        if(!emailvalitade.test(email.value)){
          emailcheck.textContent="enter the correct email";
          email.style.border="1px solid  red"
        }
        else{
            emailcheck.textContent="";
              email.style.border=""
       return email.value;
        }
    }

    

    function dobfunction() {
    let dobDate=new Date(dob.value);
    let newDate=new Date();
    let dobCheck=document.getElementById("dobcheck")
       if(dobDate>newDate){
         dobCheck.textContent="don't enter future date"
         dob.style.border="1px solid red"
       }
        else{
            dobCheck.textContent="";
            dob.style.border="";
       return  dob.value;
        }
    }
 
    function agefun() {
        return  age.value;
    }
   

    function genderfun() {
        if (gender.checked){
           return gender.value;
        }
        else if(female.checked){
       return female.value;
        }
       
    }
 

    function classfun() {
        return classInput.value;

    }
   
    function textareafun() {
        let textareapara=document.getElementById("textarea-p");
        let word = textArea.value.split("");
        let count = 0;
        for (let i = 0; i < word.length; i++) {
            count++;
        }
        if (count < 10 ) {
             textareapara.textContent="enter morethen10 words";
             textArea.style.border="1px solid red";
             //cell8.innerHTML = textArea.value;
        } else {
            textareapara.textContent="";
            textArea.style.border="";
            return textArea.value;
           
    
        }
    
    }


