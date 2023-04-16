//ARRAY:
//addresses ke base pe ap jan saktay kahan kia rakha he addresses mean index. Index start from 0.

// let months = ["Januaray", "Feb", "March", "April"]
// months[4] = "May"     not recommended this step
//this step is recommended
// let shouldIStore = prompt("Array me value rakhon?")
// if (shouldIStore === "yes"){
//     months.push("May")
// }
// console.log(months);


// let months = ["Januaray", "February","Sept", "March", "April"]
// months.shift()   remove 1st index
// months.unshift("Jan")   add value on 1st index
// months.push("May")    add value in last index
// months.pop()  delete last value from last in index
//months.lenght is basically quantity which is lenght
//  months.splice(2, 1, "June", "July") //jis jaga par delete karna he index of array 

//months.slice() //provide a new copy of array


// let newArr = months.slice(0, 2);
// console.log(months);
// console.log(newArr);

// let arr = ["Apple", "Orange", "Mango"];
// arr.forEach // loops through array values
// arr.forEach(function(val, index) {
//     console.log(index, val);
// });

// arr.filter()// Filters Array values
// let arr = [1, 9, 3, 4, 5, 6, 8, 2, 10];
// let filteredArr = arr.filter(function (val) {
//     return val % 2 === 0;
//     // if (val % 2 === 0) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
// });

// console.log(filteredArr, arr);

// arr.sort() // Sorts Array values
// let arr = [1, 9, 3, 4, 5, 6, 8, 2, 10];
// let sortedArr = arr.sort(function(a, b) {
//     if (a > b) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

// console.log(sortedArr);

// reduce

// let arr = [1, 9, 3, 4, 5, 6, 8, 2, 10];

// let total = arr.reduce(function(prevValues, currVal) {
//     return prevValues + currVal;
// }, 0);

let arr = ["Happy", "Birthday", "Ameen"];
let finalString = "";

arr.forEach(function (val) {
    finalString = finalString + " " + val;
});

// let finalString = arr.reduce(function(prevValues, currVal) {
//     return prevValues + " " + currVal;
// }, "");

console.log(finalString);

// Array.map() 