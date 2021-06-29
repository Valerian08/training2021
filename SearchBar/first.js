var prod=[
    {pname:"Lifeboy",prize:30,category:"soap",image:'lifeboy.jpg'},
    {pname:"Dettol",prize:35,category:"soap",image:"dettol.jpg"},
    {pname:"Savlon",prize:25,category:"soap",image:"savlon.jpg"},
    {pname:"Colgate",prize:55,category:"Toothpaste",image:"colgate.jpg"},
    {pname:"Pepsodent",prize:60,category:"Toothpaste",image:"pepsodent.jpg"},
    {pname:"Amul",prize:50,category:"Milk product",image:"amul.jpg"},
    {pname:"MotherDairy",prize:45,category:"Milk product",image:"motherdairy.jpg"}
    
];


function isPresent(){
    clearInputs();
    let input = document.getElementById('searchbar').value;
    let inp=input.toLowerCase();
    
    console.log("Check");
    var chk = prod.filter(p=>(p.pname.toLowerCase()===inp));
    if(chk.length===0){
        document.getElementById("disp").innerHTML="The Product "+input+" is not available! Try searching some other product. ";     
    
    }

    else{

    document.getElementById("pndisp").innerHTML="Product Name:"+chk[0].pname;
    document.getElementById("prdisp").innerHTML="Prize:"+chk[0].prize;
    document.getElementById("pcdisp").innerHTML="Category:"+chk[0].category;
    document.getElementById("pcimg").innerHTML='<img src="'+chk[0].image+'">';
    }
}




function clearInputs(){
    document.getElementById("disp").innerHTML="";
    document.getElementById("pndisp").innerHTML="";
    document.getElementById("prdisp").innerHTML="";
    document.getElementById("pcdisp").innerHTML="";
    document.getElementById("pcimg").innerHTML="";
    
    
}