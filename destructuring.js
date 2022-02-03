// const teaOrder = {
//     variety : 'oolong',
//     teaName : 'winter sprout',
//     origin  : 'taiwan',
//     price   : 12.99,
//     hasCaffeine : true,
//     quantity : 3
// };
// const price = teaOrder.price;
// const quantity = teaOrder.quantity;
// const teaName = teaOrder.teaName;
// //Destructured process instead of the above
// const { price, quantity, teaName } = teaOrder;
// const {origin} = teaOrder;
// //Example using a REST
// const {price, quantity, ...others} = teaOrder;
// //will add brewTemp to Object if undefined. If already there, will take original value
// const { brewTemp = 175} = teaOrder;
// //will change teaName to tea
// const { teaName: tea } = teaOrder;

// function checkout(tea){
//     const {quantity, price} = tea;
//     return quantity * price;
// }
// checkout(teaOrder);

//Destructuring Arrays
// const students = [
//     { name: "Drake", gpa: 4.6},
//     { name: "Henrietta", gpa: 4.4},
//     { name: "Tung", gpa: 4.0},
//     { name: "Harry", gpa: 3.8},
//     { name: "Ant", gpa: 3.2},
// ];
// //Based off position. top = Drake, second = henrietta, etc
// //can skip person with , , or use rest operator
// const [topStudent, secondBest, ,fourth] = students;
// const [first, ...others] = students

//Destructuring Functions
//Can use destructuring in the parameter list
const teaOrder = {
        variety : 'oolong',
        teaName : 'winter sprout',
        origin  : 'taiwan',
        price   : 12.99,
        hasCaffeine : true,
        quantity : 3
    };
function getTotal({quantity, price}){
    return quantity * price;
}
//instead of 
// function checkout(tea){
//     const {quantity, price} = tea;
//     return quantity * price;
// }
//Swapping 
let delicious = 'mayo';
let disgusting = 'whipped cream'

let both = [delicious, disgusting];
[disgusting, delicious] = both;
//Instead.... 1 Line Value Swap
[disgusting, delicious] = [delicious, disgusting]

