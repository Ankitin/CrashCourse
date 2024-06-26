// fill in javascript code here
const myForm = document.querySelector('form');
const name = document.getElementById('name');
const employeeID = document.getElementById('employeeID');
const department = document.getElementById('department');
const exp = document.getElementById('exp');
const email = document.getElementById('email');
const mobile = document.getElementById('mbl');
const tbody = document.querySelector('tbody');
let allData = [];

myForm.addEventListener("submit",function(e){
  e.preventDefault();
  let data = {
    name: name.value,
    employeeID: employeeID.value,
    department: department.value,
    exp: exp.value,
    email: email.value,
    mobile: mobile.value,
  }
  allData.push(data);
  tbody.innerHTML = null;
  allData.map((ele)=>{
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");
    let td8 = document.createElement("td");
    td1.innerText = ele.name;
    td2.innerText = ele.employeeID;
    td3.innerText = ele.department;
    td4.innerText = ele.exp;
    td5.innerText = ele.email;
    td6.innerText = ele.mobile;
    if(ele.exp > 5){
      td7.innerText = "Senior";
    }else if(ele.exp >= 2 && ele.exp <= 5){
      td7.innerText = "Junior";
    }else if(ele.exp <= 1){
      td7.innerText = "Trainee";
    }
    td8.innerText = "Delete";
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    tbody.append(tr);
  });
});