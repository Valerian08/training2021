 
 var count=0,tot=0;
 var n,p,ls;
 var locprod=0;


 let tab="";
 tab="<table><tr><th>Product Name </th><th>Product Prize</th></tr>";
 
function isPres(){ 
    var input = document.getElementById('searchbar').value;
    var inp=input.toLowerCase();
    isPresent(inp);  
}

function isPresent(inp){
    clearInputs();
    if(inp=="lifeboy".toLowerCase()){
        fetchFromApi(0);
    }
    else if(inp=="dettol".toLowerCase()){
        fetchFromApi(1);
    }
    else if(inp=="savlon".toLowerCase()){
        fetchFromApi(2);
    }
    else if(inp=="colgate".toLowerCase()){
        fetchFromApi(3);
    }
    else if(inp=="pepsodent".toLowerCase()){
        fetchFromApi(4);
    }
    else if(inp=="amul".toLowerCase()){
        fetchFromApi(5);
    }
    else if(inp=="MotherDairy".toLowerCase()){
        fetchFromApi(6);
    }
    else{
        document.getElementById("disp").innerHTML="The Product "+inp+" is not available!<br><br> <h3>Try searching products by category.</h3> ";  
    }
}

function fetchFromApi(i){
        var pr={};
        fetch("https://mocki.io/v1/10e97c07-7fd7-4b60-bd23-7c0ee9095d70").then((response)=>{
            return response.json();
        })
        .then(data =>{
            pr=data.prod;
            document.getElementById("pndisp").innerHTML="Product Name:"+pr[i].pname;
            document.getElementById("prdisp").innerHTML="Prize:Rs."+pr[i].prize;
            document.getElementById("pcdisp").innerHTML="Category:"+pr[i].category;
            document.getElementById("pcimg").innerHTML='<img src="'+pr[i].image+'">';
             n=pr[i].pname;
             p=pr[i].prize;
             tot=tot+p;
             var ls=[n,p,pr[i].category];
             localStorage.setItem(locprod++,JSON.stringify(ls));
            document.getElementById("pcart").innerHTML='<button onclick="addProd(n,p);" class="rounded-pill btn btn-outline-success border border-info border-2 p-2">Add To Cart</button>';
        })
        .catch(()=>{
            console.log("Inside catch");
        }).finally(()=>{
            //console.log("Inside finally");
        })
}

function addProd(n,p){  
    count++;
    document.getElementById("icount").innerHTML="Item Count: "+count;
    tab+="<tr><td>"+n+"</td><td>"+p+"</td></tr>";
}

function viewCart(){
    if (count==0){
        document.getElementById("iinc").innerHTML="Your Cart is Empty!<br>Add products to cart.</h3> "; 
    } 
    else{
    document.getElementById("iinc").innerHTML="Items In Cart";
    //tab+="</table>";
    //console.log(tab);
    document.getElementById("table").innerHTML=tab;
    document.getElementById("total").innerHTML="Total Prize: "+tot;
    }
}

function clearInputs(){
    document.getElementById("disp").innerHTML="";
    document.getElementById("pndisp").innerHTML="";
    document.getElementById("prdisp").innerHTML="";
    document.getElementById("pcdisp").innerHTML="";
    document.getElementById("pcimg").innerHTML="";
    document.getElementById("pcart").innerHTML="";    
}

//{"prod":[
//    {"pname":"Lifeboy","prize":30,"category":"soap","image":"lifeboy.jpg"}https://mocki.io/v1/d544a4cb-75dc-4978-ab85-f1583ca85198
//    {"pname":"Dettol","prize":35,"category":"soap","image":"dettol.jpg"},
//    {"pname":"Savlon","prize":25,"category":"soap","image":"savlon.jpg"},
//    {"pname":"Colgate","prize":55,"category":"Toothpaste","image":"colgate.jpg"},
//    {"pname":"Pepsodent","prize":60,"category":"Toothpaste","image":"pepsodent.jpg"},
//    {"pname":"Amul","prize":50,"category":"Milk product","image":"amul.jpg"},
//    {"pname":"MotherDairy","prize":45,"category":"Milk product","image":"motherdairy.jpg"}
//]}

//https://mocki.io/v1/10e97c07-7fd7-4b60-bd23-7c0ee9095d70---forall
