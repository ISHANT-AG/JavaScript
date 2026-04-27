let btn1 = document.querySelector("#btn1");

// btn1.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log("button was clicked");
//     let a = 24;
//     a++;
//     console.log(a);
// };
//js is given more priority..
// we can only handle one property once in javascript even if we try the latest one will over write the old one

// event object give us detail about the event (e)

//Event-Listeners
//node.addEventListener(event,callback);
//perform both task with same name

btn1.addEventListener("click", () => {
    console.log("button 1 was clicked");
});
const handler2 = () => {
    console.log("button 1 was clicked-handler2");
};

btn1.addEventListener("click", handler2);
//callback reference should be same
btn1.removeEventListener("click", handler2 );