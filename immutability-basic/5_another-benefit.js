const _ = require("lodash");

const human1 = {
  name: {
    balinese: "I Gede",
    nickname: "Wahyu",
  },
  age: 22,
};

const human2 = _.cloneDeep(human1); /* You can use JSON way too */
human2.name.nickname = "Cahyadi";

/* Instead of this */
if (
  human1.name.balinese !== human2.name.balinese ||
  human1.name.nickname !== human2.name.nickname ||
  human1.age !== human2.age
) {
  console.log("Beda orang");
}
/* If name and age is exactly the same, it's weird because they're still different human */

/* Use this */
if (human1 !== human2) {
  console.log("Beda orang");
}

/* Yep, it's simple */
/* That's the power of immutability */
/* It's applicable with destructure on non-nested object */
