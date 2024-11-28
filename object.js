// let student = {
//   name: "boldo",
//   age: 17,
//   school: "tomujin",
//   gender: "male",
// };
// console.log(student);

let students = [
  { name: "bataa", age: 18, gender: "male" },
  { name: "dulam", age: 18, gender: "female" },
  { name: "grinch", age: 18, gender: "custom" },
  { name: "bold", age: 18, gender: "male" },
  { name: "gerel", age: 18, gender: "female" },
  { name: "burma", age: 18, gender: "female" },
];

function findmales(input) {
  let male = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i].gender == "male") {
      male.push(input[i]);
    }
  }
  return male;
}
console.log("MaleStudents-", findmales(students));
console.log("cant recognize=", students[2]);

function findfirstlettersame(arr) {
  let sameletter = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.slice(0, 1) == "b") {
      sameletter.push(arr[i]);
    }
  }
  return sameletter;
}
console.log("starts with b-", findfirstlettersame(students));
