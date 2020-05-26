const normalPerson = {
    firstName : "Rahim",
    lastName : "Uddin",
    salary : 15000,
    getFullName : function () {
        console.log(this.firstName, this.lastName);
        
    },
    chargeBill : function(amount, tips, tax) {
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

// normalPerson.chargeBill(150);

// console.log(normalPerson.salary);


const heroPerson = {
    firstName : "Hero",
    lastName : "Balam",
    salary : 25000
}

const friendlyPerson = {
    firstName : "Hero",
    lastName : "Golam",
    salary : 22000
}

// ======== bind()=========

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);

// heroChargeBill(2000);
// console.log(heroPerson.salary);

// ======= call() ==========

// normalPerson.chargeBill.call(friendlyPerson, 3000, 300, 30);
// console.log(friendlyPerson.salary);


// ====== apply() ===========

normalPerson.chargeBill.apply(friendlyPerson, [3000, 300, 30]);
console.log(friendlyPerson.salary);