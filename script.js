const user = {
  Name: "Gokul",
  age: 25,
  getFullName() {
    console.log(`My Name is ${this.name}`);
  },
};
let another = {
  ...user,
};
console.log(another);
