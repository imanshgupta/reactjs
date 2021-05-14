class human {
  constructor() {
    this.gender = "male";
  }
}
class person extends human {
  constructor() {
    super();
    this.name = "max";
  }
  printname() {
    console.log(this.name);
  }
}

let person = new person();
person.name = "ansh";
person.printname();
