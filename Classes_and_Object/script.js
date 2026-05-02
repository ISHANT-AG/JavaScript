const student = {
    fullname : "ishant",
    marks : 94.4,
    printMarks: function() {
        console.log("marks = ",this.marks);
    },
};

//prototype .__proto__

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};

const karanArjun = {
    salary: 50000,
    calcTax() {
        console.log("tax is 20%");
    },
};

karanArjun.__proto__ = employee;

//CLASSES

class KIA_Car {
    stop () {
    Console.log("stop");
    }

    start () {
    Console.log("start");
    }
}

let fortuner = new KIA_Car();
let LEXUS = new KIA_Car();
