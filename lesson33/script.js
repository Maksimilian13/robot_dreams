Array.prototype.pow = function(n) {
    return this.map(item => Math.pow(item, n));
};
  
const array = [1, 2, 3];
const result = array.pow(2); 
console.log(result);
  
Function.prototype.defer = function(n) {
    const fn = this;
    return function(...args) {
      setTimeout(() => fn.apply(this, args), n);
    };
};
  
function a() {
    console.log("test");
}
  
a.defer(1000)();  