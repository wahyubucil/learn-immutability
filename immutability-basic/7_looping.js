const humans = [
  { name: "Wahyu", age: 22 },
  { name: "Alex", age: 20 },
  { name: "Galang", age: 18 },
];

/* Case study: Multiply age by 2 */

/* Common mistakes */

const newHumans = [];
for (let i = 0; i < humans.length; i++) {
  const human = humans[i];
  human.age = human.age * 2;
  newHumans.push(human);
}

// const newHumans = humans.map((human) => {
//   human.age = human.age * 2;
//   return human;
// });

// const newHumans = humans.map((human) => {
//   return { ...human, age: human.age * 2 };
// });

// const newHumans = humans.map((human) => ({
//   ...human,
//   age: human.age * 2,
// }));

console.log("humans:", humans);
console.log("newHumans:", newHumans);
