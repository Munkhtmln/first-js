const inventory = [
  { name: "apples", quantity: 3 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];
function ischerries(fruit) {
  return fruit.name === "cherries";
}

console.log(inventory.find(ischerries));
