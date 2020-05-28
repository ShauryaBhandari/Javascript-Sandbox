// Person constructor
function Person(name, dob) {
  this.name = name; // this refers to current instance of object

  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

// const brad = new Person('Brad', 36);
// const john = new Person('John', 30);

// console.log(john.age);

const Shaurya = new Person("Shaurya", "22-04-2000");
console.log(Shaurya.calculateAge());
