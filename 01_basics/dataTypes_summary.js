// JAVASCRIPT IS DYNAMICALLY TYPED LANGUAGE
// Primitive
// String, Number, Boolean, Null(Empty), Undefined, Symbol, BigInt

const score = 100;
const value = 100.3;
const isLoggedIn = true;
const temp = null;
let userEmail = undefined

const id = Symbol('123')
const anotheriD = Symbol('123')

// console.log(id == anotheriD);

const bigNum = 2312334432432435352522342n

// Reference Type / Non Prmitive
// Array, Objects, Functions

const heros =["Iron Man", "Spiderman", "Shaktiman"]
let myObj = {
    name: "Advait",
    age: 11,
}
const myFunc = function(){
    console.log("Hello World");
}

// console.log(typeof heros);

// console.table([`Score: ${typeof score}`,
// `Score: ${typeof score}`,
// `Value: ${typeof value}`,
// `isLoggedIn: ${typeof isLoggedIn}`,
// `Temp: ${typeof temp}`,
// `Email: ${typeof userEmail}`,
// `ID: ${typeof id}`,
// `Heroes: ${typeof heros}`,
// `myObje: ${typeof myObj}`,
// `Function: ${typeof myFunc}`])

// =====================================================================================
//  stack => primitive & heap => no primitve

let nameOne = 'lolwhatisit'
let nameTwo = 'lolisit'
nameTwo = 'hello';
// wont change original value, will provide a copy
// console.log(nameOne);
// console.log(nameTwo);


let userOne = {
    email: "xyz@abc.com"
}

let userTwo = userOne;

userTwo.email = "hello@abc.com"
// changes both values because non prim, reference type, heap
console.log(userOne);
console.log(userTwo);


