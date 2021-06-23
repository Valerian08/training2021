function Display(){
    var n=3;
    console.log("Square Of a Number");
    var a=Square(n);
    console.log(a);
}

function Square(num){
    return num ** 2;
}
Display();