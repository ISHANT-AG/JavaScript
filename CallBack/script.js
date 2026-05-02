console.log("one");
console.log("two");

function hello () {
    console.log("hello");
}

setTimeout(hello,2000);

//this will not wait #asychronous programming
console.log("three");
console.log("four");

//callback
function sum (a,b) {
    console.log (a + b);
}

function calculator(a, b, sumcallback) {
    sumcallback(a,b);
}

calculator(1,2,sum);

//callback_hell =>> pyramid of loop (nested loop of looppppppppppppps)

//ok-ji-ok

function getdata(DataID,getNextData) {//2s
    setTimeout(() => {
         console.log("DATA =", DataID);
         if (getNextData) {
            getNextData();
         }
    }, 2000);
}
//callback Hell -------> pyramid doom
 getdata(1, () => {
    getdata(2, () => {
        getdata (3);
    });
 });