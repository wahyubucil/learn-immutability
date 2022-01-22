let mutable = "You can change me";
mutable = "Yep, you are";
console.log("mutable:", mutable);

const immutable = "You can't change me";
// immutable = "I told you so";
console.log("immutable:", mutable);

const objectMutable = {
  name: "Kankusai Watanabe",
  age: 17,
};

// objectMutable = { no: "impossible" };

objectMutable.name = "Haha you suck";
console.log("objectMutable:", objectMutable);

const objectImmutable = Object.freeze({
  name: "Kankusai Watanabe",
  age: 17,
});

objectImmutable.name = "No it's useless";
console.log("objectImmutable:", objectImmutable);

const CONSTANT_NAME = "It's just convention and use only with primitive types";
