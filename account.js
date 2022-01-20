'use strict'

class Account {
    constructor(name, balance) {
      this._id = Account.incrementId();
      this._name = name;
      this._balance = balance;
    }
    
    get name() {
      return this._name;
    }
      set name(str) {
      _name = str;
    }
  
    get balance() {
      return this._balance;
    }
    set balance(num) {
      if (typeof num === "number") {
        this._balance = num;
      } else {
        return `Please Input A Number`;
      }
    }
    
    credit(amount) {
      this._balance += amount;
      return this._balance;
    }
  
    debit(amount) {
      if (this._balance - amount < 0) {
        return `Amount exceeded balance`;
      } else {
        this._balance -= amount;
        return this._balance;
      }
    }
  
    transferTo(anotherAccount, amount) {
      if (this.balance - amount < 0)   return `Amount exceeded balance`;
      else {
        this.balance -= amount;
        anotherAccount._balance += amount;
        return this.balance;
      }
    }
  
    static identifyAccounts(firstAccount, secondAccount) {
      if (firstAccount === secondAccount)    return true;
      else    return false;
    }
  
    static incrementId() {
      if(!this.id)  this.id = 1;
      else  this.id++;
      return this.id;
    }
    
    toString() {
      return `${this.name}'s account balance is ${this.balance}`;
    }
  }
  
  const UserAccount = new Account("User saving's", 100000);
  const cardAccount = new Account("Card", 20000);
  
  console.log(UserAccount);
  console.log(cardAccount);
  console.log(UserAccount.toString());
  console.log(UserAccount); 
  console.log(cardAccount); 
  console.log(UserAccount.credit(400)); 
  console.log(UserAccount.debit(9000)); 
  console.log(UserAccount.transferTo(cardAccount, 1000)); 
  console.log(UserAccount.balance); 