
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


// User Details 
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
    return mainconCat =Concat
}) 
console.log(Concat);
 
// 5 copy withing 