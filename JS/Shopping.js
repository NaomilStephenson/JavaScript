// shelf Object {"Bread": 0.59, "Eggs":2.99}
// Lists Object that is your shopping list
// [{name:"Bread", quanity:2}, {name:"Eggs", quanity:1}]
// Print Every item in the list with its name X quantity
// loop through and calcuate the total cost
// map through and add totalCost to shopping list object
// [{name:"Bread", quanity:2, cost:1.18}, {name:"Eggs", quanity:1, cost:2.99}]
// forEach to calcualte the total cost of the processed shopping list
// print the item, quanity, cost
// after all the items print thte total cost (in a nice format)

//Set up Shelf
const shelf = [
    {name: "Bread", price: 0.89},
    {name: "Butter", price: 1.85},
    {name: "Milk", price: 1.85},
    {name: "Eggs", price: 2.40},
    {name: "Bananas", price: 0.47},
    {name: "Cheese", price: 2.20},
    {name: "Ham", price: 1.65},
    {name: "Lettuce", price: 0.50},
    {name: "Mayo", price: 2.85}
];

//Return Items on Shelf
// for (let product of shelf){console.log("The shop has", product.name, "at", product.price, "each.")};
// or
// shelf.forEach(product => console.log("The shop has", product.name, "at", product.price, "each."));

//Set up Shopping List
const list = [
    {name: "Bread", quantity: 1},
    {name: "Butter", quantity: 1},
    {name: "Cheese", quantity: 1},
    {name: "Ham", quantity: 1},
];

//Confirm shopping list
// for (let item of list){console.log("I would like to buy", item.quantity, "lots of", item.name)};

//Calculate cost of Shopping
let totalCost = 0;
for (let product of list){
    let ref = shelf.find(o => o.name == "Bread");
    totalCost += ref.price * product.quantity;
};
console.log(totalCost);

// function costOfShopping (list, shelf) {
//     let shoppingCost = 0;
//     for (let l = 0; l < list.length; l++) {
//         for (let s = 0; s < shelf.length; s++) {
//             if (list.Item === shelf.item){
//                 shoppingCost = shoppingCost + (shelf.price * list.quantity);
//                 shelf.quantity = shelf.quantity - list.quantity;
//             }
//             else {
//                 continue;
//             };
//         };
//     };
//     return shoppingCost;
// };

// //Confirm Shopping Cost
// console.log(CostOfShopping(List,Shelf));

// //Confirm Shelf contents
// Shelf.forEach(
//     product =>
//     console.log("The shop has", product.quantity, "lots of",
//     product.item, "at", product.price, "each.")
// );
