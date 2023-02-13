const myObj = {
  name: "michael",
  isAwesome: true,
};

myObj["coffee"] = "yes please!";

for (let i in myObj) {
  console.log(i);
}
