/* Primitive data types is pass by value */
/* Primitive data types: string, number, bigint, boolean, undefined, symbol, and null. */
/* https://developer.mozilla.org/en-US/docs/Glossary/Primitive */

/* Pass by value vs Pass by reference: https://blog.penjee.com/wp-content/uploads/2015/02/pass-by-reference-vs-pass-by-value-animation.gif */

let primitive = "string is primitive";
const passByValue = primitive;

console.log("primitive:", primitive);
console.log("passByValue:", passByValue);

primitive = "no effect on passByValue";
console.log("primitive:", primitive);
console.log("passByValue:", passByValue);

/* Everything except primitive data types is `Object` in JavaScript. So it's pass by reference */
/* Every key/property on an object has reference on the memory */

const human1 = { name: "Wahyu", age: 22 };
const human2 = human1;
human2.name = "Dipa";

if (human1.name !== human2.name) {
  console.log("Wahyu bukan dipa");
} else {
  console.log("Wahyu adalah dipa");
}
// console.log("Is it a different name?", human1.name !== human2.name);

if (human1 !== human2) {
  console.log("Ya tentu saja mereka berbeda");
} else {
  console.log("Loh kok sama?");
}
// console.log("Is it a different human?", human1 !== human2);

console.log("human1:", human1);
console.log("human2:", human2);
