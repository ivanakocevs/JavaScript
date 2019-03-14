var testArray = ["vladimir", 56, true, null, [5, 4, 7], false, "zoki", {}];

for (let index = 0; index < testArray.length; index++) {
    var element = testArray[index];
    console.log(element);
    if(Array.isArray(element)) {
        for (var j = 0; j < element; j++){

        }
    }
    
}
function feedTheCats() {

var cats = ["Tabby", "Lizzie", "Mary"];

for (var day = 0; day < 7; day++) {
    for (let index = 0; index < cats.length; index++) {
        var cat = cats[index];
        if (cat === "Tabby") {
            console.log(cat + " ate fish");
        } else if (cat === "Lizzie") {
            console.log (cat + " ate chicken");
        } else {
            console.log (cat + " ate pork");
        }
        
    }
   
}
}
feedTheCats();

function feedTheCats2() {

    var cats = ["Tabby", "Lizzie", "Mary"];
    var days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    
    for (var i = 0; i < 7; i++) {
        var currentDay = days[i];
        for (let index = 0; index < cats.length; index++) {
            var cat = cats[index];
            if (cat === "Tabby") {
                console.log(cat + " ate fish on " + currentDay);
            } else if (cat === "Lizzie") {
                console.log (cat + " ate chicken on " + currentDay);
            } else {
                console.log (cat + " ate pork on " + currentDay);
            }
            
        }
       
    }
}
feedTheCats2();

function performCPR() {
    var time = 60;

    for (var i = 0; i < time; i++) {
        console.log("performing CPR...");
        if (i % 15 === 0) {
            console.log("check the pulse");

        }
            
        if (i === time - 1) {
            console.log("the patient died :(")
        }
        
    }
}
performCPR();


function isPalindrome(number) {
    var sum = 0;
    var temp = number;
    while(temp) {
        var digit = Math.floor(temp % 10);
        sum = sum * 1 + digit;    
        temp = Math.floor(temp / 10);
    }
    if(number === sum) {
        console.log ("its a palindrome!");
    } else {
        console.log("its not!");
    }
}
isPalindrome();

function isPalindrome2 (number) {
    

}


function flirting(ties, hitpoints) {
    for (var i = 0; i < tries; i++) {
        
    }
}



