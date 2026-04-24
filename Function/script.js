function myfunction() {
    console.log("welcome to apna college");
    console.log("We are learning javascript");
}
//write function twice to call it twice
//I am writing everything for the func file as i not having my NB rn.
myfunction();
myfunction();


function NewFunction(msg) {
    //parameter -> input
    console.log(msg);
}

NewFunction("I love Javascript"); //argument

function sum(b,a) {
    console.log(b+a);
}

sum(4,3);

function sums(x,y) {
    // x and y will act as local variable they only exist inside curly bracket
    s = x + y;
    console.log("before return")
    return s;
    console.log("after return")
}

//arrow function (Modern JS)

const arrowsum = (a,b) => {
    console.log(a+b);
};

arrowsum(4,5);

const arrowmul = (a,b) => {
    console.log(a*b);
}

arrowmul(4,2);

//practice 1
function vowel(str) {
    let count = 0;
    for(const char of str) {
        if(char ==="a" || char === "e" || char === "o" || char === "u" || char === "i" ) {
            count++;
        }
    }
    return count;
}