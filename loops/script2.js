
for(let i = 1; i <= 5; i++){ 
    console.log("ishant");
}

// calculate sum of 1 to 5
let sum = 0;
for ( let i=1; i <= 5; i++ ) {
    sum = sum + i;
}
console.log("sum = ",sum);
console.log("loop has ended");

let i = 1;
while(i <= 10) {
    console.log("ishant got a bonus of 5k")
    i++
}


let c = 10;
do {
    console.log("apna college");
    c++;
} while(confirm <= 10);

let str = "ishant";
for (let l of str) {
    console.log("i =",l);
}

let student = {
    name : "ishant",
    age : 19,
    cgpa: 7.5,
    ispass: true,
};

for (let key in student) {
    console.log("key=",key,"value=",student[key]);
}

//practice Qs1
for(let num=0; num<= 100; num++ ) {
    if(num%2 === 0 ) {
    console.log("num =",num);
    }
}

//practice que 2
let gamenum = 25;

let usernum = prompt("guess the number : ");

while(usernum != gamenum) {
    usernum = prompt("you entered the wrong number :")  
}

console.log("congrats you enter the right number");

let hoo = `template Literal`;
console.log(hoo);
