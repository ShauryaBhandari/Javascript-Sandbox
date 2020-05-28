const person = {
  firstName: "Shaurya",
  lastName: "Bhandari",
  age: 20,
  email: "sb@srm.com",
  hobbies: ["music", "sports"],
  address: {
    //embedded object, nested
    city: "Delhi",
    state: "Delhi",
  },
  getBirthYear: function () {
    return 2020 - this.age; //this must be used when inside an object
  },
};

let val;

val = person;

// Get specific value from object
val = person.firstName;
val = person["lastName"];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address["city"];
val = person.getBirthYear();

console.log(val);

// array of objects
const people = [
  { name: "John", age: 30 },
  { name: "Mike", age: 23 },
  { name: "Nancy", age: 40 },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
