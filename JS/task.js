let pets = [
    { name: "Wally", animal: "Cat", sex: "Male", breed:"Tabby"},
    { name: "Meg", animal: "Dog", sex: "Female", breed:"Border-Collie"},
    { name: "Star", animal: "Cat", sex: "Female", breed:"Black"},
    { name: "Skye", animal: "Cat", sex: "Female", breed:"White"},
    { name: "Comet", animal: "Dog", sex: "Male", breed:"Border-Collie"},
];
console.log(pets);
pets.push ({name:"Keiba", animal: "Dog", sex: "Female", breed: "Mongrel"});
console.log(pets);
console.log("List each pet's?");
for( let x of pets) {
    console.log(x.name);
}
console.log("Which pets are Dogs?");
for( let x of pets) {
    console.log(x.name, x.animal == "Dog" ? "TRUE" :"");
}
console.log("Amend an Entry?");
for (let x of pets) {
    console.log(x.name, x.breed);
    if (x.animal == "Cat") {
        x.breed = "Domestic Short Hair";
    }
    console.log(x.name, x.breed);
}
console.log("Boy / Girl Split");
let counter = 0;
let boys = 0;
let girls = 0;
while ( counter < pets.length ) {
    if (pets[counter].sex=="Male") {
        boys++;
    }
    else {
        girls ++;
    }
    counter++;
}
console.log("There are", boys,"Boys");
console.log("There are", girls, "girls");