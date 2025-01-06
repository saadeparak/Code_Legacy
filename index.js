// const userList = document.querySelectorAll(".nameList li");
// const listInput = document.querySelector('.list-input');

// const addListBtn = document.querySelector(".addListBtn");

// addListBtn.addEventListener('click', function(){
//     // Create an li out of thin air
//     const newLi = document.createElement('LI');
//     const liContent = document.createTextNode(listInput.value)
//     // Add the input value inside that new li
//     newLi.appendChild(liContent)
//     // Attaching the li to the user list
//     userList.appendChild(newLi)
// });
// console.log();

// "use strict";
// // [do while Loops]

// let myArray = [555555555];
// let i = 10;

// do {
//     myArray.push(i);
//     i++;
// } while (i < 5)

// console.log(i, myArray);

// const magic = () => new Date(); // Really shortened arrow function

// // [promises]:

// let p = new Promise((resolve, reject) => {
//     let a = 1+1;
//     if (a == 2) {
//         resolve('Success')
//     } else {
//         reject('Failed')
//     }
// });

"use strict";

const Hanzala = {
    jpeg:"blah",
};

if (Hanzala.jpeg === "blah") {
    console.log("ABM was wrong");
}
else {
    console.log("Hanzala was wrong");
}

if (5*'A' == 325) {
    console.log(1);
}