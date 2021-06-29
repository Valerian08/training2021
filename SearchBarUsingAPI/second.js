
function isPresent(){
    clearInputs();
    let input = document.getElementById('searchbar').value;
    let inp=input.toLowerCase();  
    //console.log("Check");
    if(inp=="lifeboy".toLowerCase()){
        var prod1={};
        fetch("https://mocki.io/v1/10e97c07-7fd7-4b60-bd23-7c0ee9095d70").then((response)=>{
            return response.json();
        })
        .then(data =>{
            //console.log(data);
            prod1=data.prod;
            //console.log(prod1);
            document.getElementById("pndisp").innerHTML="Product Name:"+prod1[0].pname;
            document.getElementById("prdisp").innerHTML="Prize:"+prod1[0].prize;
            document.getElementById("pcdisp").innerHTML="Category:"+prod1[0].category;
            document.getElementById("pcimg").innerHTML='<img src="'+prod1[0].image+'">';
        })
        .catch(()=>{
            console.log("Inside catch");
        }).finally(()=>{
            //console.log("Inside finally");
        })
    }
    else if(inp=="dettol".toLowerCase()){
        var prod2={};
        fetch("https://mocki.io/v1/10e97c07-7fd7-4b60-bd23-7c0ee9095d70").then((response)=>{
            return response.json();
        })
        .then(data =>{
            //console.log(data);
            prod2=data.prod;
            //console.log(prod2);
            document.getElementById("pndisp").innerHTML="Product Name:"+prod2[1].pname;
            document.getElementById("prdisp").innerHTML="Prize:"+prod2[1].prize;
            document.getElementById("pcdisp").innerHTML="Category:"+prod2[1].category;
            document.getElementById("pcimg").innerHTML='<img src="'+prod2[1].image+'">';
        })
        .catch(()=>{
            console.log("Inside catch");
        }).finally(()=>{
            //console.log("Inside finally");
        })
    }
    else if(inp=="savlon".toLowerCase()){
        var prod3={};
        fetch("https://mocki.io/v1/10e97c07-7fd7-4b60-bd23-7c0ee9095d70").then((response)=>{
            return response.json();
        })
        .then(data =>{
            //console.log(data);
            prod3=data.prod;
            //console.log(prod3);
            document.getElementById("pndisp").innerHTML="Product Name:"+prod3[2].pname;
            document.getElementById("prdisp").innerHTML="Prize:"+prod3[2].prize;
            document.getElementById("pcdisp").innerHTML="Category:"+prod3[2].category;
            document.getElementById("pcimg").innerHTML='<img src="'+prod3[2].image+'">';
        })
        .catch(()=>{
            console.log("Inside catch");
        }).finally(()=>{
            //console.log("Inside finally");
        })
    }
    else if(inp=="colgate".toLowerCase()){
        var prod4={};
        fetch("https://mocki.io/v1/10e97c07-7fd7-4b60-bd23-7c0ee9095d70").then((response)=>{
            return response.json();
        })
        .then(data =>{
            //console.log(data);
            prod4=data.prod;
            //console.log(prod4);
            document.getElementById("pndisp").innerHTML="Product Name:"+prod4[3].pname;
            document.getElementById("prdisp").innerHTML="Prize:"+prod4[3].prize;
            document.getElementById("pcdisp").innerHTML="Category:"+prod4[3].category;
            document.getElementById("pcimg").innerHTML='<img src="'+prod4[3].image+'">';
        })
        .catch(()=>{
            console.log("Inside catch");
        }).finally(()=>{
            //console.log("Inside finally");
        })
    }
    else if(inp=="pepsodent".toLowerCase()){
        var prod5={};
        fetch("https://mocki.io/v1/10e97c07-7fd7-4b60-bd23-7c0ee9095d70").then((response)=>{
            return response.json();
        })
        .then(data =>{
            //console.log(data);
            prod5=data.prod;
            //console.log(prod5);
            document.getElementById("pndisp").innerHTML="Product Name:"+prod5[4].pname;
            document.getElementById("prdisp").innerHTML="Prize:"+prod5[4].prize;
            document.getElementById("pcdisp").innerHTML="Category:"+prod5[4].category;
            document.getElementById("pcimg").innerHTML='<img src="'+prod5[4].image+'">';
        })
        .catch(()=>{
            console.log("Inside catch");
        }).finally(()=>{
            //console.log("Inside finally");
        })
    }
    else if(inp=="amul".toLowerCase()){
        var prod6={};
        fetch("https://mocki.io/v1/10e97c07-7fd7-4b60-bd23-7c0ee9095d70").then((response)=>{
            return response.json();
        })
        .then(data =>{
            //console.log(data);
            prod6=data.prod;
            //console.log(prod6);
            document.getElementById("pndisp").innerHTML="Product Name:"+prod6[5].pname;
            document.getElementById("prdisp").innerHTML="Prize:"+prod6[5].prize;
            document.getElementById("pcdisp").innerHTML="Category:"+prod6[5].category;
            document.getElementById("pcimg").innerHTML='<img src="'+prod6[5].image+'">';
        })
        .catch(()=>{
            console.log("Inside catch");
        }).finally(()=>{
            //console.log("Inside finally");
        })
    }
    else if(inp=="MotherDairy".toLowerCase()){
        var prod7={};
        fetch("https://mocki.io/v1/10e97c07-7fd7-4b60-bd23-7c0ee9095d70").then((response)=>{
            return response.json();
        })
        .then(data =>{
            //console.log(data);
            prod7=data.prod;
            //console.log(prod7);
            document.getElementById("pndisp").innerHTML="Product Name:"+prod7[6].pname;
            document.getElementById("prdisp").innerHTML="Prize:"+prod7[6].prize;
            document.getElementById("pcdisp").innerHTML="Category:"+prod7[6].category;
            document.getElementById("pcimg").innerHTML='<img src="'+prod7[6].image+'">';
        })
        .catch(()=>{
            console.log("Inside catch");
        }).finally(()=>{
            //console.log("Inside finally");
        })
    }
    else{
        document.getElementById("disp").innerHTML="The Product "+input+" is not available! Try searching some other product. ";  
    }


}

function clearInputs(){
    document.getElementById("disp").innerHTML="";
    document.getElementById("pndisp").innerHTML="";
    document.getElementById("prdisp").innerHTML="";
    document.getElementById("pcdisp").innerHTML="";
    document.getElementById("pcimg").innerHTML="";
    
    
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

//https://mocki.io/v1/10e97c07-7fd7-4b60-bd23-7c0ee9095d70---singleAPIforall
