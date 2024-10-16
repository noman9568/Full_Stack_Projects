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
  let pass = document.querySelector('.password-data');
    let pass_error = document.querySelector('.p1');
    if(pass.innerText=='') {
      pass_error.style.color = 'Red';
      pass_error.style.fontSize = '17px';
      pass_error.innerText = "Password is required";
    }
    if(user_name=='') {
      let user_error = document.querySelector('.p2');
      user_error.style.color = 'Red';
      user_error.style.fontSize = '17px';
      user_error.innerText = "Username is required";
    }
}


//arrow function


// let a = ()=>{
//   console.log('Hello');
// }
// a();
//  let b = ()=>console.log('Hello');
//  b();

 let c = (m,n) => {
  return m+n;
 }
 let a = c(2,3);
 let b = c('hello','world');
 console.log(b);
 console.log(a);


