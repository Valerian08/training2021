setTimeout(cback,5000);

function cback(){
    console.log("Hello i'm inside cback!");
}

function call(){
    console.log("Hello i'm inside call!");
}

function display(a,c){
    console.log(a+" "+"Hi!i'm inside display.");
    c();
}
display("Hello",call);

var any=function(abc){
    console.log("Hi!i'm anonymous.")
    console.log(abc);
}
any(function(){});

function addA(){
    var a=10,c=7;
    function addB(){
        var b=5;
        function addition(){
            console.log(a+b);
        }
        addition();
    }
    addB();

}
addA();

