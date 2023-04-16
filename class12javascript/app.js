//Arrow Function: 

//normal function:
// function add(x, y){
//     return x + y;
// }


//arrow function: ye ap ki statement bhi short kar sakta he
// const subtract = (x,y) => {
//     return x - y;
// }

// const multiply = (x,y) => x * y;

//if you have one parameter
// const round = num => Math.round(num)

// console.log(subtract(5, 3));
// console.log(multiply(5, 3));
// console.log(Math.round(5.97));




//scope arrow function apna create nahi karta jo poranay walay functions hamaray pass hen wo apna scope create
//kartay hen. 

// const obj = {
//     name: 'Saylani',
//     print: function(){
//         setTimeout(() =>{
//             console.log(this.name);
//         },1000)
//     }
// }
// obj.print();




//default parameters
// function add(x = 5, y = 10){
//     return x + y
// }
// console.log(add(3,7));



//rest parameters: agar ap sure nhi ho ke ap ka function kitnay parameters le ga to ap wahan pe rest parameter le 
//saktay ho
// function printAll(x, y, ...z) {
//     console.log(x, y, z);
// }

// printAll(5, 2, 8, 4, 5, 8, 9)


// const firstName = 'Ammar';
// const lastName = 'Khan';

// const obj = {
//     firstName,
//     lastName,
//     printName(){
//         console.log('Ammar Khan');
//     }
// }
// obj.printName;




// const obj = {
//     firstName: "Ammar",
//     lastName: "Khan",
//     printName (){
//         console.log("Ammar Khan");
//     }
// }
// const userFirstName = obj.firstName
// console.log(userFirstName);
// const {firstName} = obj
// console.log(firstName);

// const arr = ["Ammar", "Khan", "Saylani"]
// const [ , lastName, abc] = arr
// // console.log(firstName);
// // console.log(lastName);
// console.log(abc);





//Spread Operators:kisi bhi array ko object ko expand kar detay hen.
// const arr = ["Ammar", "Khan", "Saylani"]
// const newArr = ["Some Data", ...arr, "Another Data"]
// console.log(newArr);


// const obj = {
//     firstName: "Ammar",
//     lastName: "Khan",
// }

// const newObj = {...obj, hobby: "Video Games", firstName: "Ali"}
// console.log(newObj);






//OOPs: Koi bhi programming jis me object includes hon os ko ham OOPs(Object Oriented Programming) kehtay hen.
//yani asi programming jo object ke around evolve kartay hen. 

//Classes: In ka kaam hota he ke object bana kar dena.Classes are the blue-print of objects.


const obj = {
    name: "LED TV",
    price: 46000
}

const obj2 = {
    title: "Samsung Galaxy",
    amount: 14000
}

const products = [obj, obj2]
products.forEach(p => console.log(p.name))


class Product {
    constructor(title,price){
        this.title = title;
        this.price = price;
    }
}

const product1 = new Product("LED TV", 46000)
const product2 = new Product("Samsung Galaxy", 14000)
