// let arr = [1,2,3,4,5];
// let arr2 = arr.map((x)=>x*x);
// let arr3 = arr2.filter(x=>x%2==0);
// let sum = arr.reduce((x,y)=>x*y,1);
// console.log(sum);
// console.log(arr2);
// console.log(arr3);

// const students = [
//   {name: 'Alice',score:50},
//   {name: 'Bob',score:65},
//   {name: 'Charlie',score:80},
//   {name: 'David',score:45},
//   {name: 'Rahul',score:50},
// ];
// console.log(students.map(x=>x.name));
// console.log(scores);
// let sum = students.filter(x=>x.score>60).map(x=>x.score).reduce((x,y)=>x+y,0);
// let sum = students.filter(x=>x.score>60).reduce((x,y)=>x+y.score,0);
// let sum = students.filter(x=>x.score>60).map(x=>x.score+10).reduce((x,y)=>x+y,0);
// console.log(sum);

let num = [1,2,3,4,5,6];
let sum = num.forEach((x)=>console.log(x));

sayhello=()=>{
  console.log('hello');
};
console.log('start');

// setTimeout(sayhello,3000);
console.log('end');

//callback hell
setTimeout(()=>{
  console.log('first');
  setTimeout(()=>{
    console.log('second');
    setTimeout(()=>{
      console.log('third');
    },3000)
  },2000)
},1000);

//callback hell solution - promises and async/await , now async/await is used more because it's easy
// promises states - pending , fulfilled and rejected
// pending : initial state , neither fulfilled nor rejected
// fulfilled : operation completed successfully
// rejected : Operation failed
