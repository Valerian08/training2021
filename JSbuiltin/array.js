
var no=[1,2,3];
const numbers=[8,7,3,4,6,4,4,9];


console.log("var Array outside function: "+no);
console.log("const Array outside function: "+numbers);
console.log("Square of numbers in array using 'map' is :"+numbers.map(number => Math.pow(number,2)));
console.log("-----------------------");

function arrayFunctions(){
    console.log("var Array inside first function: "+no);
    const numbers=[1,2,3,4,5,6,7,8];
    let num=[4,5,6];
    console.log("const Array inside first function: "+numbers);
    console.log("let Array inside first function: "+num);
    console.log("-----------------------");
    
    Inside();
    function Inside(){
        console.log("const Array inside second function: "+numbers);
        console.log("var Array inside second function: "+no);
        let num=[7,8,9];
        console.log("let Array inside second function: "+num);
        num=[10,11,12];
        console.log("let Array inside second function after reassigning in same function: "+num);
    }
    console.log("-----------------------");
    console.log("Square of numbers in array using 'map':"+numbers.map(number => Math.pow(number,2)));
    console.log("All even numbers in the array using 'filter': "+numbers.filter(number => number%2==0));
    console.log("All odd numbers in the array using 'filter': "+numbers.filter(number => number%2));
    console.log("Adding(Pushing) numbers to the array ");
    numbers.push(12,14);
    console.log("Array after push of 12,14 :"+numbers);
    console.log("Removing(pop) element from the array");
    numbers.pop();
    console.log("Array after pop operation: "+numbers);
    console.log("Reversed array using 'reverse':"+numbers.reverse());
    console.log("-----------------------");
   


    let anotherArray = [9,5,7,2,4,1,0];
    console.log("Index of 7 in array is "+numbers.indexOf(7,0));
    console.log("Unsorted array "+anotherArray+" Sorted array "+anotherArray.sort());
    console.log("Deleting some elements from the array: Original array: "+anotherArray);
    anotherArray.splice(1,2);
    console.log("Array after splice operation: "+anotherArray);
    console.log("-----------------------");

    const values=[[1,2,3],[4,5,6],[7,8,9]];
    console.log("Iterating through 3d array using forEach:");
    values.forEach(value => console.log(value));
    console.log("Converting array to string using join method with seperator '-' : "+numbers.join("-"));
    console.log("If 1 is present in array or not:"+numbers.includes(7));
    console.log("If 10 is present in the array or not:"+numbers.includes(10));
    console.log("Original const array : "+numbers);
}

arrayFunctions();