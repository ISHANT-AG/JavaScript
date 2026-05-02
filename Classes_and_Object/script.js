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


//inheritance = passing down properties from parent class to child class

class parent {
    hello () {
        console.log("hello");
    }
}


class Child extends parent {
    
}

let obj = new Child();


class person {
    eat() {
        console.log("Eat")
    }
    sleep() {
        console.log("sleep")
    }
    run() {
        console.log("run")
    }
}

class engineer extends person {
    constructor(branch) {
        super(); // to invoke parent class constructor
        this.branch = branch;
    }
    work() {
        console.log("solve problem,build something");
    }
}

let ishantobj = new engineer("Chemical eng");

//super keyword

 class user {
    constructor(name,email) {
        this.name = name;
        this.email = email;
    }

    viewdata() {
        console.log("data = ",DATA);
    }
 }

 let student1 = new user("ishant","agarwalishant690@gmail.com");
 let student2 = new user("bittu","bittu408@gmail.com");

 class admin extends user {
    constructor(name,email) {
        super(name,email);
    }
    editdata() {
        DATA = "Some new value";
    }
 }

 let admin1 = new admin("ishant","agarwalishant");


 //Error Handling
 let a = 5;
 let b = 10;
 console.log("A + B = ", a + b );
 console.log("A + B = ", a + b );
 console.log("A + B = ", a + b );
 console.log("A + B = ", a + b );
 try {
    console.log("A + B = ", a + b);
 } catch (err) {
    console.log("Err");
 }

 console.log("A + B = ", a + b );
 console.log("A + B = ", a + b );