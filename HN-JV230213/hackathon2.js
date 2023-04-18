// let students=[{
//     name:"rikkei",
//      email:"rikkei@gmail.com",
//      phoneNumber:0823868888,
//      address:"ha noi",
//      gender:"nam"
// },
// {
//     name:"academy",
//      email:"academy@gmail.com",
//      phoneNumber:0828638888,
//      address:"hcm",
//      gender:"nu"
// },
// ]
let resultTag = document.getElementById("result");
let studentsList = [];
function saveData() {
  let usename = document.getElementById("usename").value;
  let Email = document.getElementById("email").value;
  let number = document.getElementById("number").number;
  let address = document.getElementById("address").value;
  let gender = document.getElementById("gender").value;
  let std = {
    'usename': usename,
    'email': Email,
    'number': number,
    'address': address,
    'gender': gender,
  };
  studentsList.push(std);
  showData();
 
}
function showData() {
    resultTag.innerHTML=''
    let index=0;
  for (let  std of studentsList) {
    resultTag.innerHTML += `<tr>
  <td>${++index}</td>
  <td>${std.usename}</td>
  <td>${std.Email}</td>
  <td>${std.number}</td>
  <td>${std.address}</td>
  <td>${std.gender}</td>
  <td>
    <button>sua</button>
    <button>xoa</button>
  </td>
</tr>`;
  }
}


