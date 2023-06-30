// Exercise 1
    // let fname = "Naomi";
    // let surname = "Stephenson";
    // let home = "Swindon";
    // let starsign = "Capricorn";
    // let ex1ans = [fname,surname,home,starsign];
    // console.log("Exercise 1 answers:", ex1ans);

// Exercise 2
    // let car = "Citreon";
    // let model = "C3 Picasso Exclusive";
    // console.log("Exercise 2 answers:","My favourite car is",car,"and the model is",model);

// Exercise 3
    // console.log("Exercise 3 answers:");
    // console.log("%c Orange","color: orange;font-family:fantasy; font-style: Bold; background-color: black;padding: 10px");
    // Variables Page

// Exercise 4 - exercise instructions are poor!
    // let a;
    // let b = "12345";
    // let c =12344;
    // let d = true;
    // let e = {a:"Javascript"};
    // console.log("Exercise 4 answers:");
    // console.log(typeof(a));
    // console.log(typeof(b));
    // console.log(typeof(c));
    // console.log(typeof(d));
    // console.log(typeof(e));

// Exercise 5 - exercise instructions are poor!
    // let totalMoney = 4000;
    // let moneyPaidSoFar = 2348;
    // let totalLeftToPay;
    // totalLeftToPay = totalMoney - moneyPaidSoFar;
    // console.log("Exercise 5 answers:","The total bill is £",totalMoney,"the remaining amount of money to be paid is £",totalLeftToPay);

// Exercise 6
    // console.log("Exercise 6 answers:");
    // for (let A = 100; A <= 200; A++ ) {
    //     console.log(A);
    // }

// Exercise 7
    // console.log("Exercise 7 answers:");
    // for (let A = 100; A <=200; A++) {
    //     if (A%2 == 0) {
    //             console.log(A,"-");
    //     }
    //     else {
    //             console.log(A,"*");
    //     }
    // }

// Exercise 8
    // console.log("Exercise 8 answers:");
    // for (let N = 1; N <= 10; N++) {
    //     for (let M = 1; M <= 10; M++) {
    //         console.log(M);
    //     }
    // }

// Exercise 9
    // console.log("Exercise 9 answers:");
    // let now = new Date();
    // let day = now.getDay();
    // switch (day) {
    //     case 0:
    //         console.log("Monday");
    //         break;
    //     case 1:
    //         console.log("Tuesday");
    //         break;
    //     case 2:
    //         console.log("Have a Break");
    //         break;
    //     case 3:
    //         console.log("Thursday");
    //         break;
    //     case 4:
    //         console.log("Friday");
    //         break;
    //     case 5:
    //         console.log("Saturday");
    //         break;
    //     case 6:
    //         console.log("Sunday");
    //         break;
    //     default:
    //         console.log("I don't know!");
    // }

// Exercise 10
    // console.log("Exercise 10 answers:");
    // let strictA = true;
    // let strictB = 1;
    // console.log(strictA == strictB); //TRUE
    // console.log(strictA === strictB); //FALSE
    // console.log(strictA != strictB); // FALSE
    // console.log(strictA !== strictB); // TRUE

// Exercise 11
    // console.log("Exercise 11 answers:");
    // let age = 35;
    // if(age >= 100) {
    //     console.log("dead");
    // }
    // else if ((65 <= age) && (age < 100)) {
    //     console.log("pensioner");
    // }
    // else if ((18 <= age) && (age < 65)) {
    //     console.log("working adult");
    // }
    // else if ((0 <= age) && (age < 18)) {
    //     console.log("child");
    // }
    // else {
    //     console.log("not yet living");
    // }

// Exercise 12
    // console.log("Exercise 12 answers:");
    // let age = 65;
    // let confirm = (age > 50 ? "Older than 50" : "Younger than 50");
    // console.log( confirm );

// Exercise 13
    // console.log("Exercise 13 answers:");
    // let dvName = "Darth Vader";
    // let darthVader = { allegiance: "Empire", weapon: "lightsabre", sith:true};
    // console.log(darthVader);
    // console.log("Darth Vaders allegiance is to the", darthVader.allegiance);
    // console.log("Darth Vaders weapon of choice is ", darthVader.weapon);
    // console.log("Darth Vaders is a sith?", darthVader.sith ? "TRUE" :"FALSE");
    // console.log("Darth Vaders is a Jedi?", darthVader.allegiance ? "FALSE" :"TRUE");

// Exercise 14
    console.log("Exercise 14 answers:");
    let myArray = ["hello","everyone"]
    console.log(myArray.length);
    myArray.push("my","name","is","Nay");
    console.log(myArray.length);
    myArray.shift();
    console.log(myArray.length);