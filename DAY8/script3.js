let data = {
  'id':1,
  'name':'unknown',
  'city': 'ghaziabad'
};

function fetchdata() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(data);
    },2000);
  })
}

fetchdata().then((data) => {
  console.log(data);
  return data;
}).then((data) => {
  data.name = 'Shubham';
  setTimeout(() => {
    console.log(data.name);
  },2000);
  return data.city;
}).then((unknown)=>{
  console.log(unknown);
}).catch((error) => console.log(error));