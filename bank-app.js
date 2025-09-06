/**
 * Bank App
 * The app will have user accounts that can hold funds
 *  ax
//  */ 
// const users = [
// {id: 1, name: 'frank', balance: 5000},
// {id: 2, name: 'stanley', balance: 3000},
// {id: 3, name: 'james', balance: 4000}, .
// {id: 4, name: 'mercy', balance: 6000},
// {id: 5, name: 'joy', balance: 7000},
// {id: 6, name: 'mary', balance: 8000},
// {id: 7, name: 'joshua', balance: 9000},
// {id: 8, name: 'david', balance: 10000},
// {id: 9, name: 'susan', balance: 11000},
// {id: 10, name: 'linda', balance: 12000},
// ]; 


class BankApp {
    constructor(users){
        this.users = users
    } 
    getAllUsers(search){
        if(!search) return this.users;
        return this.users.filter(user => user.name.includes(search.toLowerCase()))
    }  
}  

const banking = new BankApp(users)
console.log(banking.getAllUsers("6"));