// let numbers = [12, 13, 11, 1, 16];
// let numbers2 = [23, 26, 11, 13, 12];

// let allnumbers = [...numbers, ...numbers2];

// let max = allnumbers[0];
// allnumbers.map((number) => {
//   if (max < number) {
//     max = number;
//   }
// });
// console.log(max);

const names = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 25 },
  { name: "John", age: 30 },
  { name: "Jane", age: 35 },
  { name: "Joe", age: 40 },
];
const name2 = [
  { name: "Andy", age: 20 },
  { name: "Bilguun", age: 25 },
  { name: "Jargalmaa", age: 30 },
  { name: "Anguuch", age: 35 },
  { name: "Mah", age: 40 },
  { name: "Chinguun", age: 45 },
];
// 1. FIND FIRST PERSON THAT NAME STARTS WITH 'C'
let fullnames = [...names, ...name2];

let chst = fullnames.find((cstart) => {
  return cstart.name[0] === "C";
});
console.log("FIRST PERSON THAT NAME STARTS WITH 'C'", chst);

// 2. FIND FIRST PERSON THAT OLDER THAN 25
let olderage = fullnames.find((ager) => {
  return ager.age > 24;
});
console.log("FIRST PERSON THAT OLDER THAN 25", olderage);
