// Now ES6 is used, it makes syntax easier than ES5
// Here we have class concepts just like c++, much easier
// Just changes how we write it, working is just as same as ES5 in the inner engine

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(x, y) {
    return x + y; // stand alone function, then use static
  }
}

const mary = new Person("Mary", "Williams", "11-13-1980");

mary.getsMarried("Thompson");

console.log(mary);

console.log(Person.addNumbers(1, 2));
