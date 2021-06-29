var num1=17.485;
console.log("17.485 to 2 decimal places is:" +NumDec(num1));
console.log("17.485 to precision of 3 is:" +NumPrec(num1));

var str= new String("Hello World");
var str1= new String("Hello Again");
console.log("The character at index 1 of Hello World is:" +StrChar(str));
console.log("Concatenated string is:" +StrCon(str,str1));
console.log("Index of 'Again' in 'Hello Again' is:" +StrInx(str1));
console.log("Length of string 'Hello Again' is:" +StrLen(str1));
console.log("Substring of string 'Hello Again' is:" +StrSub(str1));
console.log("Bold of string 'Hello Again' is:" +StrBold(str1));
console.log("String repeated twice 'Hello Again' is:" +str1.repeat(2));

console.log("Today's Date and Time is:" +Date());

console.log("Cosine of 2*Pi is:"+Math.cos(2*Math.PI));
console.log("e raise to 0 is:"+Math.exp(0));
console.log("Round of -2.7 is:"+Math.round(-2.7));
console.log("Log of 0 is:"+Math.log(0));
console.log("Smallest of -2,10,-5,20 is:"+Math.min(-2,10,-5,20));
console.log("Largest of -2,10,-5,20 is:"+Math.max(-2,10,-5,20));
console.log("4 to the power 4 is:"+Math.pow(4,4));
console.log("Squareroot of 26 is:"+Math.sqrt(26));
console.log("Is 23.5 an integer?:"+Number.isInteger(23.5));
console.log("Trignometric values:");
Trig(90);

function NumDec(n){
    return n.toFixed(2);
}
function NumPrec(n){
    return n.toPrecision(3);
}
function StrChar(str){
    return str.charAt(1);
}
function StrCon(str,str1){
    return str.concat(str1);
}
function StrInx(str1){
    return str1.indexOf("asdfg");
}
function StrLen(str1){
    return str1.length;
}
function StrSub(str1){
    return str1.substr(6,10);
}
function StrBold(str1){
    return str1.bold();
}
function Trig(n){
    console.log("sine of 90 is:"+Math.sin(n));
    console.log("cos of 90 is:"+Math.cos(n));
    console.log("tan of 90 is:"+Math.tan(n));
}




