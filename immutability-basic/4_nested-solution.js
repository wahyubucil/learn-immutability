const _ = require("lodash"); // Due to bundle size, don't use it this way on frontend, only on backend
// const { cloneDeep } = require("lodash"); // Due to bundle size, don't use it this way on frontend, only on backend
// const cloneDeep = require("lodash/cloneDeep"); // Only import needed module on frontend to reduce bundle size
// const cloneDeep = require("lodash.cloneDeep"); // If you only need one module, install a specific package

const human1 = {
  name: {
    balinese: "I Gede",
    nickname: "Wahyu",
  },
  age: 22,
};

/* JSON Way */
// const human2 = JSON.parse(JSON.stringify(human1));
// human2.name.nickname = "Cahyadi";

/* Lodash Way */
// const human2 = _.cloneDeep(human1);
// human2.name.nickname = "Cahyadi";

console.log("Is it a different human?", human1 !== human2);
console.log("Is it a different `name` object?", human1.name !== human2.name);

console.log("human1:", human1);
console.log("human2:", human2);

// /* JSON vs Lodash */

const objectWithFunction = {
  name: {
    first: "Wahyu",
    last: "Budi",
  },
  doSomethingRandom: () => {
    /* This not available on arrow function */
    console.log(Math.random());
  },
  fullName() {
    console.log(this.name.first + " " + this.name.last);
  },
};

/* JSON process heavy on memory when processing big string and can't clone a function */
/* No typescript support */
// const clone = JSON.parse(JSON.stringify(objectWithFunction));
// console.log(clone);

/* Lodash process heavy on CPU because accessing every key but can clone a function  */
/* Typescript support */
// const clone = _.cloneDeep(objectWithFunction);
// console.log(clone);

// clone.doSomethingRandom();
// clone.fullName();
