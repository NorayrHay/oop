'use strict'

class Shiritory {
    constructor(words, game_over) {
      this.words = [];
      this.game_over = false;
    }
  
    play(word) {
      
      let a, b;
      let arr1 = [];
      let arr2 = [];
  
      if(typeof word === 'string')  this.words.push(word);    
  
      for(let i = 0; i < this.words.length; i++) { 
        a = this.words[i].slice(-1);
        b = this.words[i].slice(0, 1);
        arr1.push(a);
        arr2.push(b);
      }
  
      arr1.splice(-1)
      arr2.splice(0, 1);
      
      const checkRepeating = this.words.filter((item, index) => this.words.indexOf(item) !== index);
      
      if(checkRepeating.length > 0)  return `Game over`;  
  
      if(JSON.stringify(arr1) !== JSON.stringify(arr2))  return `You Louse`;
  
      else return this.words;
    }
  
    restart() {
      this.words = [];
      this.game_over = false;
      return 'Game restarted';
    }
  }
  
  const myShiritory = new Shiritory();
  
  myShiritory.play("apple");
  myShiritory.play("ear");
  myShiritory.play("rhino");
  myShiritory.restart();