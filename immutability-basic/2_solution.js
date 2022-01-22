const human1 = {
  name: "Wahyu",
  age: 22,
};

const human2 = { ...human1 }; // Object destructuring
human2.name = "Dipa";

// const human2 = { ...human1, name: "Dipa" }; // Shorthand

/* Old way */
// const human2 = Object.assign({}, human1);
// human2.name = "Dipa";

/* Old way vs new way */
// const address = { place: "STMIK Primakara", province: "Bali" };

// const human2 = Object.assign({}, human1, address);
// human2.name = "Dipa";

// const human2 = { ...human1, ...address, name: "Dipa" };

/* Destructure is better */

console.log("Human name is different?", human1.name !== human2.name);

console.log("Is it a different human?", human1 !== human2);

console.log("human1:", human1);
console.log("human2:", human2);
