'use strict'

class Author {
    constructor(name, email, gender) {
      this.name = name;
      this.email = email;
      this.gender = gender;
    }
    
    get nameField() {
      return this.name;
    }
  
    toString() {
      let firstLetter = this.gender.charAt(0).toUpperCase();
      if(firstLetter === 'F')  return 'Mrs. ' + this.name;
      else if(firstLetter === 'M')  return 'Mr. ' + this.name;
    }
  
    typeError = function() {
      if(typeof(this.name) !== 'string')  throw new Error('not a string');
    }
  }
  
  const author1 = new Author('J. K. Rowling', 'abc@gmail.com', 'fEmaLe');
  
  class Book {
    constructor(title, author, price, quantity) {
      this.title = title;
      this.author = author;
      this.price = price;
      this.quantity = quantity;
    }
  
    getProfit = function() {
      return this.price * this.quantity;
    }
  
    get () {
      return this._title;
    }
    set (title) {
      this._title = title;
    }
  
    toString() {
      return this;
    }
  }
  
  const book1 = new Book('fairy tail', author1.name, 2000, 4);
  
  console.log(author1.gender);
  console.log(author1.name);
  console.log(author1.toString()); 
//   console.log(author1.typeError());
  // console.log(book1.classTitle);
//   console.log(book1.getProfit());
  // console.log(book1.toString());