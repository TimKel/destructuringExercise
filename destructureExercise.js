// ObjectDestructuring 1
// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;
// answer 8, 1846

//ObjectDestructuring 2
//It will print the both discovery years for neptune and mars, the "rest"
//{yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

//ObjectDestructuring 3
// Your name is Alejandro and you like purple
// Your name is Melissa and you like green
// Your name is undefined and you like green

//ArrayDestructuring1
//let [first, second, third] = ["Maya", "Marisa", "Chi"];
// console.log(first); // "maya"
// console.log(second); // "marisa"
// console.log(third); // "chi"

//ArrayDestructuring2
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//     "Raindrops on roses",
//     "whiskers on kittens",
//     "Bright copper kettles",
//     "warm woolen mittens",
//     "Brown paper packages tied up with strings"
//   ]
// console.log(raindrops); // "Raindrops on roses"
// console.log(whiskers); // "whiskers on kittens"
// console.log(aFewOfMyFavoriteThings); 
//     "Bright copper kettles",
//     "warm woolen mittens",
//     "Brown paper packages tied up with strings"

//ArrayDestructuring3
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]
//[10,30,20]

//ES5 Assigning Variables to Object Properties
// const obj = {
//     numbers: {
//       a: 1,
//       b: 2
//     }
//   };
  
//   const {a,b} = obj.numbers

  //ES5 Array Swap
  //[arr[0], arr[1]] = [arr[1], arr[2]];

  //raceResults
  
//   const raceResults = ([first, second, third, ...others]) => ([first, second, third, others])
  
//   raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/