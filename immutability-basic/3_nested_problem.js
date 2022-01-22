const human1 = {
  name: {
    balinese: "I Gede",
    nickname: "Wahyu",
  },
  age: 22,
};

const human2 = { ...human1 };
human2.name.nickname = "Cahyadi";

console.log("Is it a different human?", human1 !== human2);
console.log("Is it a different `name` object?", human1.name !== human2.name);

console.log("human1:", human1);
console.log("human2:", human2);
