class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        
    }
}


const heroPerson = new Person("Hero", "Balam", 25000);

console.log(heroPerson);
const friendlyPerson = new Person("Hero", "Golam", 20000);
console.log(friendlyPerson);


function Person1(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldPerson = new Person1("Grand", "Papa", 1200);
console.log(oldPerson);

