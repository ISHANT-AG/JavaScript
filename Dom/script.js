
//DOM = document object model
//console.log--> print
//console.dir--> print obj

let newbtn = document.createElement("button");
newbtn.innertext = "click me";

newbtn.style.color = "white";
newbtn.style.backgroundColor="red";

document.querySelector("body").prepend(newbtn);