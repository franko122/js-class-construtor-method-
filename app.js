class Aclass{

    constructor(width, height){
        this.width = width
        this.height = height
    } 

   method1(){
        console.log(`the sum of width: ${this.width} and height: ${this.height} = ${this.width+this.height}`)
    }
    // method2(){}
    // method3(){}
    // method4(){}
}

function getUsername(){
    console.log("stancobridge")
}



// getUsername()

const a = new Aclass(45,78);
// console.log(a.width)
a.method1()


class Account {
    constructor(balance, name,  ){
        this.balance = balance;
        this.name = name 
    }

    getAccountDetails(){
        return {
            balance: this.balance,
            name: this.name, 
        }
    }

    changeName(newName){
        this.name = newName
    }

    addFunds(newFunds){
        this.balance += newFunds  
    }
    
    debitFunds(Debit){
        this.balance -= Debit
    }

}

const stanleyAccount = new Account(0, "stanley")
const frankAccount = new Account(0, "frank")
 
 
let amountadd = 100;
let debits = 20;
stanleyAccount.addFunds(amountadd)
console.log(stanleyAccount.getAccountDetails());


frankAccount.addFunds(amountadd)
console.log(frankAccount.getAccountDetails());


frankAccount.debitFunds(debits)
console.log(frankAccount.getAccountDetails());


// const b = new Aclass();

// console.log(a);

// console.log(a===b); 

// class car {

//      constructor(model){
//         this.model=model;
//      }

//      printmodel(){
//          console.log(this.model);
//      }
// }
// const bmwcar = new car("BMW");

// bmwcar.printmodel(); 

// // getter ans setter

// class Animal {
//     constrution (name){
//         this.name = name; 
//     }

//     get name (){
//         return this.name;
//     }

//     set name (value){
//         this._name = value;
//     }
// }

// const animal = new Animal("Tiger") 

// // static method 


// class Myclass {
//     static staticMethod (){
//         console.log(this); 
//     }
// }

// Myclass.staticMethod();


// class User {
//     constructor(name,email){
//         this.name =  name;
//         this.email = email; 
//     }
//     greet(){
//         console.log(`Hi , I am ${this.name}`);
        
//     }
// }

// const user = new User ('frank-developer');
// user.greet();



// // private and public 
// class  washington {
//     construtor (brand ){
//         this.brand  = brand ;
//     }

//     start(){
        
//     }

//     stop(){
        
//     }

// }


// class human {
//     species = 'homo sapian '; //public

//     constructor (name,age ){
//         this.name =name;
//         this.age = age;
//     }
//     introduce (){
//         console.log(`h1 , am ${this.name}, and am ${this.age } years old` ); 
//     }

//     sleep (){
//         console.log(`${this.name} is sleeping `)
//     }
// }


// class student extends human{

//     constructor(name,age,grade){
//         this.name =name;
//         this.age = age;
//     }
//      study (){
//         console.log(`${this.name} is studying ...... `);
        
//      }
// }

