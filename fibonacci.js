/**
* Find fibonacci of n
*/
const fibonacci = (n) => {
  if (n === 0) {
      return 0;
  } else if (n === 1) {
      return 1;
  } else {
    var fibos = [0,1];
    for(var i = 2; i < n+1; i++) {
      fibos[i] = fibos[i - 1] + fibos[i - 2];
    }
    return fibos[n];
  }
}
console.time('fibonacci');
console.log("fibonacci is: ",fibonacci(50));
console.timeEnd('fibonacci');

