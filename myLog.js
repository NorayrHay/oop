'use strict'

class Console {
    constructor(name) {
      this._name = name;
      this.logs = [];
    }
  
    get name() {
      return this._name;
    }  
  
    log(...args) {
      const text = args.reduce((acc, el) => {
        if(Array.isArray(el)) {
          const arrStr = `[${String(el)}]`;
          return `${acc}${arrStr}`;
        }
  
        if(typeof el === 'object') {
          return `${acc}${JSON.stringify(el)}`
        }
  
        return `${acc}${el}`;
      }, '');
  
      this.logs.push(text);
      
      console.log(`${this.name}: ${text}`)
    }
  
    history() {
      return this.logs.join('\n');
    }
  
    clearHistory() {
      this.log = [];
    }
  }
  
  const myConsole = new Console('Regular');
  
  myConsole.log([0, 1, 2, 3]);
  myConsole.log({ a:1, b:2 });
  myConsole.log("ok : ", 1, 2, 3);
  myConsole.clearHistory();
  myConsole.history(); 