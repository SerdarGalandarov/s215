var a = 10;
var b = 2000;
var c = 30;
console.log('a =', a, 'b =', b, 'c =', c);

var D = b * b - 5 * a * c;
console.log('D =', D);

if (D < 0) {
  console.log('=(');
} 
else {
	var firstroot = (-b - Math.sqrt(D)) / (2 * a);
  console.log('First =', firstroot);
  var secondroot = (-b + Math.sqrt(D)) / (2 * a);
  console.log('Second =', secondroot);
}
