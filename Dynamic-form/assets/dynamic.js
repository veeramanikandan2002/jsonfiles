
let nameinput = document.getElementsByClassName("form-name-inputs");
let roll = document.getElementsByClassName("form-roll-inputs");
let email = document.getElementsByClassName("form-email-inputs");
let dob = document.getElementsByClassName("form-dob-inputs");
let age = document.getElementsByClassName("form-age-inputs");
let gender = document.getElementsByClassName("form-gender-inputs");
let female = document.getElementsByClassName("form-gender-female-inputs");
let classInput = document.getElementsByClassName("form-class-inputs");
let textArea = document.getElementsByClassName("form-text-inputs");
let myform = document.getElementById("form-data");
let dynamicDiv = document.getElementById("dynamic-div");
let addBtn = document.getElementsByClassName("add-btn");
let submitBtn = document.getElementById("submit-id");
let tableData = document.getElementById("usertable")
let count = 0;



myform.addEventListener('input', checking);
function checking() { 
    
    if (nameinput[count].value == "" ||
        roll[count].value == "" || email[count].value == "" ||
        dob[count].value == "" || age[count].value == "" ||
    (!gender[count].checked && !female[count].checked) || classInput[count].value == "" || textArea[count].value == "") {
        addBtn[count].style.display = "";
        submitBtn.style.display = "";
    }
    else {

        addBtn[count].style.display = "inline-block";
        submitBtn.style.display = "inline-block";
        
    }


}

myform.addEventListener('submit', function (event) {
    event.preventDefault();


    if ((userfun() == "" || userfun() == undefined) || (rollfun() == "" || rollfun() == undefined) ||
        (emailfun() == "" || emailfun() == undefined) ||
        (dobfunction() == "" || dobfunction() == undefined) || agefun() == "" || (genderfun() == "" || genderfun() == undefined) ||
        classfun() == "" || (textareafun() == "" || textareafun() == undefined)) {
        alert(" Please Enter All field correctly");
    }
    else {
        insertTable();
        tableData.style.display = "flex";
        submitBtn.style.display = "";
        checking()
        myform.reset();
        resetform();
        
        count=0;
        console.log(dynamicDiv);
    }
})

function addNew() {
    addBtn[count].style.display = "";
    count = count + 1;
    create();
}

function create() {
   
    const newformDiv = document.createElement('div');
    newformDiv.className = "form-date-div";
    newformDiv.innerHTML = `
    <div class="first-part">

    <form id="form-data">
    <label>
        Name:
    </label><br>
    <input type="text" placeholder="enter your name" class="form-name-inputs" oninput="userfun()">
     <div class="name-att"></div>  
     <label >
    Roll:
</label><br>
<input type="text" placeholder="enter your roll" class="form-roll-inputs" oninput="rollfun()">
<div class="roll-att"></div>
  <label for="email">
        Email:
    </label><br>
    <input  type="text" placeholder="enter your Email" class="form-email-inputs" oninput="emailfun()">
    <div class="email-check"></div><br>
</div>
 <div class="second-part">
    <label for="DOB">
        DOB: 
    </label> <br>
  <input type="date" placeholder="enter your Date of birth" class="form-dob-inputs" oninput="dobfunction() "  onchange="dobfun()">
       <div class="dobcheck" ></div>
        
        <label for="Age">
            Age: 
        </label><br> <input type="text" placeholder="enter your age" class="form-age-inputs"  ><br>

    <label for="Gender">Gender:<br>
       
        <input type="radio" class="form-gender-inputs" name="Gender${count}" value="male" >male
         <input type="radio" class="form-gender-female-inputs" name="Gender${count}" value="female" >female
         
    </label><br>
</div>
<div class="third-part">
    <lable>Class:
        <br>
    <select name="class" class="form-class-inputs" >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
    </select>
</lable><br>
    <label >TextArea:</label><br>
    <textarea  class="form-text-inputs" placeholder="write morethen 10 words" oninput="textareafun()"></textarea><br>
    <p class="textarea-p"></p>
  
    <button type="button" class="add-btn" onclick="addNew()">Add</button>
</div>
</form>
</div> 
 
    `;
    dynamicDiv.appendChild(newformDiv);
    return;
}




function insertTable() {
    let createtable = document.getElementById("usertable");

    for (let i = 0; i <= count; i++) {
        let createRow = createtable.insertRow();
        let cell1 = createRow.insertCell(0);
        let cell2 = createRow.insertCell(1);
        let cell3 = createRow.insertCell(2);
        let cell4 = createRow.insertCell(3);
        let cell5 = createRow.insertCell(4);
        let cell6 = createRow.insertCell(5);
        let cell7 = createRow.insertCell(6);
        let cell8 = createRow.insertCell(7);

        cell1.innerHTML = userfun(i);
        cell2.innerHTML = rollfun(i);
        cell3.innerHTML = emailfun(i);
        cell4.innerHTML = dobfunction(i);
        cell5.innerHTML = agefun(i);
        cell6.innerHTML = genderfun(i);
        cell7.innerHTML = classfun(i);
        cell8.innerHTML = textareafun(i);

    }


}

function dobfun() {
    
    let dob = document.getElementsByClassName("form-dob-inputs");
    let dateofbirth = dob[count].value;
    let newDate = new Date(dateofbirth);
    let diff = Math.abs(new Date() - newDate);
    let difinedate = diff / (1000 * 60 * 60 * 24 * 365);
    age[count].value = +(Math.floor(difinedate));
}



let checkstr = /^[A-Za-z]+$/;
function userfun(index = null) {
    index = index !== null ? index : count;
    let nameatt = document.getElementsByClassName("name-att");
    if (!checkstr.test(nameinput[index].value)) {
        nameatt[index].textContent = "enter  the correct name";
        nameinput[index].style.border = "1px solid red"
    }
    else {
        nameatt[index].textContent = " ";
        nameinput[index].style.border = "";
        return nameinput[index].value;
    }
}


function rollfun(index = null) {
    index = index !== null ? index : count;
    let rollcheck = document.getElementsByClassName("roll-att");
    if (!checkstr.test(roll[index].value)) {
        rollcheck[index].textContent = "Enter correct roll name";
        roll[index].style.border = "1px solid red"
    }
    else {
        rollcheck[index].textContent = " ";
        roll[index].style.border = ""
        return roll[index].value;
    }
}

let emailvalitade = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
function emailfun(index = null) {
    index = index !== null ? index : count;
    let emailcheck = document.getElementsByClassName("email-check");
    if (!emailvalitade.test(email[index].value)) {
        emailcheck[index].textContent = "enter the correct email";
        email[index].style.border = "1px solid  red"
    }
    else {
        emailcheck[index].textContent = "";
        email[index].style.border = ""
        return email[index].value;
    }
}


function dobfunction(index = null) {
    index = index !== null ? index : count;

    let dobDate = new Date(dob[index].value);

    let newDate = new Date();
    let dobCheck = document.getElementsByClassName("dobcheck")
    if (dobDate > newDate) {
        dobCheck[index].textContent = "don't enter future date"
        dob[index].style.border = "1px solid red"
    }
    else {
        dobCheck[index].textContent = "";
        dob[index].style.border = "";
        return dob[index].value;
    }
}

function agefun(index = null) {
    index = index !== null ? index : count;
    return age[index].value;
}


function genderfun(index = null) {
    index = index !== null ? index : count;

     if (gender[index].checked) {
        return gender[index].value;
    }
    else if (female[index].checked) {
        return female[index].value;
    }
    
}


function classfun(index = null) {
    index = index !== null ? index : count;
    return classInput[index].value;

}

function textareafun(index = null) {
    index = index !== null ? index : count;
    let textareapara = document.getElementsByClassName("textarea-p");
    let word = textArea[index].value.split("");
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
        sum++;
    }
    if (sum < 10) {
        textareapara[index].textContent = "enter morethen10 words";
        textArea[index].style.border = "1px solid red";

    } else {
        textareapara[index].textContent = "";
        textArea[index].style.border = "";
        return textArea[index].value;


    }
}

function resetform() {
    console.log(count)
    dynamicDiv.innerHTML = '';
}
