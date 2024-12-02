//   a();
//   b();
// let chatprogram = (a, b, c) => {
//   c();
// };

// let greeting = chatprogram(
//   () => {
//     console.log("hey guy");
//   },
//   () => {
//     console.log("how are you");
//   },
//   () => {
//     console.log("nice to meet you");
//   }
// );

// mapppp;

// let grades = [123, 132, 2515, 532, 324, 123, 123, -12, 124, -15];

// for (let i = 0; i < grades.length; i++) {
//   let grade = grades[i];
//   console.log(grade);
// }

// grades.map((grade) => {
//   console.log(grade);
// });

let students = [
  { name: "bataa", age: 23, gender: "male" },
  { name: "dulam", age: 16, gender: "female" },
  { name: "grinch", age: 26, gender: "custom" },
  { name: "bold", age: 29, gender: "male" },
  { name: "gerel", age: 18, gender: "female" },
  { name: "burma", age: 18, gender: "female" },
];
let filtered = students.filter((student) => {
  console.log("filtered", student);
  return student.age > 18;
});
console.log(filtered);
