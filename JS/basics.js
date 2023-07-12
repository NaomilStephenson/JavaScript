console.log("Hello World");

// let x = 1;
//  console.log( x+1 );
//  console.log( x*5 );

//  let y = "Hello World";

//  console.log ( y );

 let string = "Test";
 let number = 9;
 let animal = { animal: "cat", called: "Skye" };
 
 console.log (animal);

 let array = [1,2,3,4,5,6,7,8,9];
 console.log(array);

 let houseno = 15; //Local vairables
 var street =" St Josephs Way"; // Global variables

 console.log (houseno + street);

 console.log(string);
 console.info(string);
 console.warn(string);
 console.error(string);

 //.methodName() = method
 //           {} = object
 //           [] = array


 //template literal
 // \n is newline
 // \\ = \
 // \"quotes\" - insert quote

 // || = or
 // && = and

 //From Cameron:

 'use strict';
/*
    It will force us to write secure code, as it will not run bad syntax!
    You can't: 
        accidenally create a global var
        assign a value to a non-writable property
        use protected keywords
*/

console.log("Hello World");
console.info("Details to note");
console.warn("Do not eat Dragon Droppings!");
console.error("This is a critical Error!");

// Styling the console

console.log(`%c` + "Prettier text", `color:white; background-color: blue; font-size: 20px; padding:5px;`);

// Data Types
//      Dynamic & Mutable
//      Use camelCase for naming

var userName             // Historical - DO NOT USE!! not Secure & will not account for Scope!
const pie = 3.141        // Goes darker blue as is a constant - can not be changed, muyst be declared fully
let userPassword         // Variable that can change

let aBoolean = true;                                        // True or False
let aNumber = 456789;                                       // Any number up to 
let aFloat = 1.45;                                          // Any decimal (2 dp)
let scissors = "Scissors"
let aString = "How long is a piece of a string?";           // Legacy - Standard for Strings (works synonmous with ' )
let bString = 'As long as you cut it!';                     // Legacy - Simple for Strings (works synonmous with "" )
let cString = `Where are the ${scissors}?`;                 // Updated Notation - use for Strings where need to pass in variables within it
let aBigInt = 999999999999999;                              // If you do not include the 'n' it will round up
let aSymbol = Symbol('description');                        // Unique
let aNull = null;                                           // 
let anUndefined;                                            // Instansiated but not assigned a value

let anObject = {
    key: "Value",

};

// Concatenation

let st1 = "Hello";
let st2 = " World!";
console.log(st1 + st2);

// Interpolation (better type ofconcatenation with memory saving)

let num1 = 7;
let num2 = 3;
let result1 = num1 * num2;
console.log(num1 + " * " + num2 + " = " + result1);

// this is changed to become

let calc = `5 * 6 = ${5*6}`;
console.log(calc);

// CONDITIONALS

// FALSEY
/*
    false
    0
    ''
    ``
    ""
    undefined
    null
    NaN (Not a number)
*/

// Everything else is TRUTHY => IF Statement

let x = '';
if (x){
    console.log("x is truthy");
} else {
    console.log("x is falsey");
};

// TERNARY IF statement
// takes this:

let y = 2;
if(y==2) {
    console.log(`y is 2`);
} else {
    console.log(`y is not 2`);
};

// and becomes:

let z = 4;
z == 4 ? console.log(`z is 4`) : console.log(`z is not 4`);

// Mutation of Data Types

if (1 == `1`) {
    console.log(`Mutated`);
}

console.log (`is the number ${1} the same value and data type as string "1"? `)
1 === `1` ? console.log(`TRUE`) : console.log(`FALSE`);


