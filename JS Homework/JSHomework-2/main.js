var x ="Ice";
var y ="Cream";


function myFunction(x, y, z){ 
    if (z==true){
        return x + y;
    }
    if (z==false){
        return y + x;
    }
}

alert(myFunction(x,y,5>2));
alert(myFunction(x,y,5<2));

function totalTax (salary){
    if (salary > 1000){
        return ((salary-1000)*0.18+1000*0.11);
    }
    if (salary < 1000){
        return salary * 0.11;
    }
}

alert (totalTax(1500));


function totalTaxCraftsman (salary, job){
    if (salary>1000 && job==="craftsman"){
        return ((salary-1000)*0.10+1000*0.05);
    }
    if (salary < 1000 && job==="craftsman" ){
        return salary * 0.05;
    }
    if () {
        return totalTax(salary);
    }
    
}

alert (totalTaxCraftsman(500,"craft"));