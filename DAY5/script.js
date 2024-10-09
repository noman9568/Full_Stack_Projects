"use strict";
// var temp = {
//   'Name':['a','b'],
//   'RollNo':[115,116]
// }
// console.log(temp);
// function display(b='Noman Hussain') {
//   alert(`Welcome to the Webpage Mr ${b} .`);
//   let h = confirm('Are you suree about it!');
//   alert(h);
// }

// console.log('Hello');
function validate() {
  let user_name = document.querySelector(".userName").value;
  let password = document.querySelector('.password-data').value;
  let p1 = document.querySelector('.login');
  if(user_name="admin" && password=="admin"){
    p1.innerText = 'Data Submitted';
  }
}