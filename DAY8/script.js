const myPromise = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    if(success){
      resolve("Data send Successfully!");
    }
    else {
      reject("Data send Failed!");
    }
  },2000);
});
function name() {
   return console.log("My name is Shubham");
}
myPromise.then((message)=>{
  console.log(message);
  return name();
}
).catch((error)=> console.log(error)).then((name)=> console.log(name));