import 'babel-polyfill';
import service from './../service';
service();
console.log('Component 1 Imported');

class Component1 {
  constructor() {
    console.log('Component 1 Created');
  }
}

export default Component1;