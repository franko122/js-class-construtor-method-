
/**
 * 
 * forEach
 * map
 * filter
*/
// const increasedAge = ages.forEach(function(age, index) {
    //     return age * 2
// })

// console.log({increasedAge})

// const multipleAge = ages.map(age => {
//     console.log(age)
//     return age * 2
// })

// console.log({multipleAge})

// const youngAges = ages.filter(age => {
//     return age < 40
// })

// console.log(youngAges) 



//  my examples 


// User Details;



const users = [{
       User1:{id:1,myName:"franklin",age:20,balance:200},
       User2:{id:2,myName:"Judith",age:30,balance:500}
}];

//  1 filter Method
const getAllusers = users.filter(all =>{  
    return all 
})

console.log(getAllusers);


// 2 map Methods
const mapAllUsers = users.map(mainMap =>{
    return mainMap.User1 === 0
})

console.log(  mapAllUsers); 

// 3 at method

const atUsers = users.at(mainAt =>{
    return mainAt
}) 
console.log( atUsers);
 
//  4 concat 
const Concat = users.concat(mainconCat => {
    return mainconCat 
});

console.log(Concat.copyWithin(0, 3, 4));
 
// 5 copy withing 

const wiThing = users.copyWithin(mainWith => {
    return mainWith
})

console.log(wiThing);

// 6 entries 
const iterator = users.entries();
console.log(iterator.next().value);

//7 every \
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold)); 




// 8 fill 
// Fill with 0 from position 2 until position 4
console.log(users.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(users.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(users.fill(6));
// Expected output: Array [6, 6, 6, 6]

 

//  9 find   ;

const found = users.find((element) => element > 10);

console.log(found);
// Expected output: 12  


//  find IndxOf 
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  if (n % 2 === 0) {
    return n === 2;
  }
  for (let factor = 3; factor * factor <= n; factor += 2) {
    if (n % factor === 0) {
      return false;
    }
  }
  return true;
}

console.log([4, 6, 8, 9, 12].findIndex(isPrime));  
console.log([4, 6, 7, 9, 12].findIndex(isPrime));  


//  findLast  
const   founds = users.findLast((element) => element > 45);

console.log(found); 

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  if (n % 2 === 0) {
    return n === 2;
  }
  for (let factor = 3; factor * factor <= n; factor += 2) {
    if (n % factor === 0) {
      return false;
    }
  }
  return true;
}

console.log([4, 6, 8, 12].findLastIndex(isPrime));  
console.log([4, 5, 7, 8, 9, 11, 12].findLastIndex(isPrime)); // 5


//  flact 
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());  
const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat()); 

console.log(arr2.flat(2)); 

console.log(arr2.flat(Infinity)); 



// flatmap();
const arr = [1, 2, 1];

const result = arr.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result); 


// includes 

console.log(users.includes(2)); 
const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat")); 

console.log(pets.includes("at")); 



// indexOf();
const beasts = ["ant", "bison", "camel", "duck", "bison"]; 
console.log(beasts.indexOf("bison")); 
console.log(beasts.indexOf("bison", 2)); 
console.log(beasts.indexOf("giraffe")); 

// join()
const elements = ["Fire", "Air", "Water"];

console.log(elements.join()); 

console.log(elements.join("")); 

console.log(elements.join("-")); 

// keys() 
const iterators = users.keys();

for (const key of iterators) {
  console.log(key);
} 

//  last indexOf 
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

console.log(animals.lastIndexOf("Dodo")); 

console.log(animals.lastIndexOf("Tiger")); 



// push    
const mapped = users.map((x) => x * 2);

console.log(mapped); 


//  reduce   
const oki = users.map((x) => x * 2);

console.log(oki); 


// reduce right  

const results = users.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue),
);

console.log(results);

// reverse() 
console.log("array:", users);
// Expected output: "array:" Array ["one", "two", "three"]

const reversed = users.reverse();
console.log("reversed:", reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log("array:", users);
// Expected output: "array:" Array ["three", "two", "one"];


 

const firstElement = users.shift();

console.log(users);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1




 

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
