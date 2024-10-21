
// async and await -------------------------------------------

// async function orderFood(name,time) {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve(name + " Prepared");
//     },time);
//   });
// }

// async function order() {
//   console.log('Order placed');
//   let food1 = await orderFood("Pizza",1000);
//   console.log(food1);
//   let food2 = await orderFood("Burger",3000);
//   console.log(food2);
//   let food3 = await orderFood("Coke",1500);
//   console.log(food3);
// }
// order();

// fetching data from github api using async and await
document.body.style = "font-size: 25px; font-family:'Georgia',san-serif; color: Red;";
document.body.innerText += "Data Fetched from github api using async and await";
document.body.innerHTML += "<br>";
document.body.innerHTML += "<br>";
let div = document.createElement("div");
async function fetchData() {
  try {
    let response = await fetch("https://api.github.com/users?per_page=10");
    let data = await response.json();

    data.forEach( user=>{
      console.log(`Login: ${user.login} ,Node ID: ${user.node_id} ,URL: ${user.url}`);
      div.textContent += `Login: ${user.login} ,Node ID: ${user.node_id} ,URL: ${user.url}`;
      // document.body.innerHTML += "<br>";
    })
  } catch(error) {
    console.log("Error in fatching data " + error);
  }
}
fetchData();