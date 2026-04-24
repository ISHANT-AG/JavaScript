
 let heroes = ["ironman","captain america","thor","hulk","black widow"];
 console.log(heroes);

 let marks = [4, 23, 34, 34, 235];
 console.log(marks);
 console.log(marks[1]);
 console.log(marks.length);
 
 for(let hero of heroes) {
    console.log(hero);
 }

 let mark = [85,43,34,43,23,12];

 let sum = 0;

 for(let val of mark) {
    sum += val;
 }

 let avg = sum / mark.length;
 console.log(`avg mark of the class = ${avg}`);
 
 let khana = ["potato","namkeen","panipuri"]

 khana.push("burger","chowmein","momos");

 console.log(khana);
 console.log(khana.slice(1,4));

 let arr = [1,2,3,4,5,6,7];

 arr.splice(2, 2, 101, 102);

 console.log(arr);