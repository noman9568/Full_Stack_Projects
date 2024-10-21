function task(message,delay) {
  return new Promise((resolve)=> {
    setTimeout(() => {
      console.log(message);
      resolve();
    },delay);
  })
}

task("First task complete",1000)
.then(()=> task("Second task complete",2000))
.then(()=> task("Third task complete",3000))
.then(()=> task("Fourth task complete",4000));