const myObj = {
  name: "michael",
  isAwesome: true,
};

const myOtherObj = {
  faveANIMAL: "DOG",
  animalName: "fred",
};

myObj["coffee"] = "yes please!";

for (let i in myObj) {
  console.log(i);
}
