function fetchdata() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const students = [
        {name:"Alice" , score: 50},
        {name:"Bob" , score: 60},
        {name:"Charlie" , score: 70},
        {name:"David" , score: 80},
        {name:"Eve" , score: 90}
      ];
        resolve(students);
    },4000);
}) }


fetchdata().then((students)=>{
  console.log(students.reduce((acc,student) => acc + student.score,0));
  students.forEach((student) => {
    console.log(student.name);
  });
})
.catch((error) => console.log(error));








