console.log("one");
console.log("two");

function hello () {
    console.log("hello");
}

setTimeout(hello,2000);

//this will not wait asychronous programming
console.log("three");
console.log("four");