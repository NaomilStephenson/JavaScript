console.log("Hello World");

let x = 1;
 console.log( x+1 );
 console.log( x*5 );

 let y = "Hello World";

 console.log ( y );

 let string = "Test";
 let number = 9;
 let animal = { animal: "cat", called: "Skye" };
 
 console.log (animal);

 let array = [1,2,3,4,5,6,7,8,9];
 console.log(array);

 let houseno = 15;                          // Local vairables
 var street =" St Josephs Way";             // Global variables

 console.log (houseno + street);


 .methodName() = method
           {} = object
           [] = array


//  template literal
//  \n is newline
//  \\ = \
//  \"quotes\" - insert quote

//  || = or
//  && = and

 // From Cameron:

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

// // and becomes:

let z = 4;
z == 4 ? console.log(`z is 4`) : console.log(`z is not 4`);

// // Mutation of Data Types

if (1 == `1`) {
    console.log(`Mutated`);
}

console.log (`is the number ${1} the same value and data type as string "1"? `)
1 === `1` ? console.log(`TRUE`) : console.log(`FALSE`);


// // Objects

    // legacy method

    let animal = new Object();

    animal["name"] = "Clifford";
    animal["type"] = "Dog";
    animal["size"] = "Big";
    console.log(animal);

    console.colour = "Red";
    console.log(animal);

    // New 'lieteral' method

    let vehicle = {
        "type": "Bike",
        "seats": 1,
        "wheels": 2
    };

    console.log(vehicle);
    console.log(vehicle.type);

    let garage = [
        vehicle,
        {
            "type": "Car",
            "seats": 5,
            "wheels": 4
        }
    ];

    console.log(garage);

// Looping through Arrays

let myArray = ['a','b','c','d','e'];
let alphabet = '';

    // Traditional for loop

        for (let i=0; i< myArray.length; i++) {
            console.log(`Adding ${myArray[i]} to the alphabet`);
            alphabet += myArray[i] + " ";
        };

    // Enhanced for loop

        for (let item of myArray){  //same as previous version
            console.log(item);
        };

    // Array Object Methods

        console.log(myArray.reverse());         // Reverses the array
        console.log(myArray.join(" > "));     // Converts an array into a string
    
// JSON - Java Script Object Notation

    let newJSON = {
        "name"  :   "Naomi",                     // must have "" around the keys!!!
        "age"   :   38
    };

    // stored like a string:

        let myJSONString = '{"name" : "Naomi", "age" : 38}';
    
    // Stringify = JSON to String

        console.log("Converting JSON to String");
        let strJSON = JSON.stringify(newJSON);
        console.log(strJSON);
    
    // PARSING = String to JSON

        console.log("Converting String to JSON");
        let jsonStr = JSON.parse(strJSON);
        console.log(jsonStr);

// Functions

    function hello(who) {                       // Set up function (with argument)
        console.log("Hello", who);
    };

    hello("Naomi");                             // Call the function
    hello("Dean");

    // Returns

    let bye = false;
    function goodbye() {
        console.log("Goodbye");
        return bye = true;                      // will stop the code - so should be placed at the end!
    }

    goodbye();
    console.log(bye);

    // Variable returns

    function sum(a,b){
        return a+b;
    };

    console.log(sum(51,5));

    // Arrow Functions

    function greeting(message){
        return message;
    }

    // 1 - Drop the function keyword & Add '=' + '=>'

    greeting = message => {                                         // singular argument
        return message;
    }

    query = (question,answer) => {                                  // multiple argument
        return question + answer;
    }

    // 2 - Drop the Return, remove brackets {}

    greeting = message =>                                           // singular argument
        message;
    query = (question,answer) =>                                    // multiple argument
        question + answer;

    // 3 - Assign to a let & move to a single line

    let greeting = message => message;                              // singular argument
    let query = (question,answer) => question + answer;             // multiple argument

    console.log(greetings(`hi`));
    console.log(query("Who","Me"));

// SCOPE

    var scopex;                 // Historical - DO NOT USE!! not Secure & will not account for Scope!

    // Local
        // variables declard inside a code block have thier scope limited to that block
    
    // GLOBAL
        // 1 - Outside a Code Block
        // 2 - Automatically set as Global, can occur in Functions - example below (message) - will not work with Strict!

            let greeting = x => message = x;        
            console.log(greetings(`hi`));