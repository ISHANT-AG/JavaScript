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