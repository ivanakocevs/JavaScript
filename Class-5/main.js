function iteration() {
    for (var i=0; i<=15; i++) {
        if (i % 2 === 0) {
            console.log("even");
        }
        else {
            console.log("odd");
        }
        
    }


}
iteration();

function secondIteration() {
    for (i = 0; i <= 100; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log ("FizzBuzz");
        }
        else if(i % 3 === 0){
            console.log ("Fizz");
        }
        else if (i % 5 === 0){
            console.log ("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
secondIteration();


function armstrongNumber() {
    for (i = 100; i <= 999; i++){
        var result = sumOfCubes(i);

        if (result === i){
            console.log(i);
        }
        

    }

}
armstrongNumber();

function sumOfCubes (number){
    var suma = 0;
    while(number) {
        var cifra = number % 10;
        suma += Math.pow(cifra, 3);
        number = Math.floor(number / 10);
    }

    return suma;

}


function sumOfMultiples (i){
    var sum = 0;
    for (i = 0; i < 1000; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            sum += i;
    }
    
}
console.log ("The sum is" + sum);
}

sumOfMultiples();

function range (x,y){
    var sum = 0;
    for (var i = x; i <= y; i++) {
        
        sum += i;
    }
    console.log (sum.toString());

}
range (1, 5);


function totallyDifferent (n, x) {
    var result = true;
    while (true) {
        n++;
        var diffNumbers = areDifferent (n, x);
        if (diffNumbers ) {
            console.log ("the numbers are totally different", n, x)
            return;
        }

    }
}

function areDifferent (num1, num2) {
    while (num1) {
        var secondary = num2;
        var firstDigit = num1 % 10;
        while (secondary) {
            var secondDigit = secondary % 10;
            if (firstDigit === secondDigit) {
                return false
            }
            secondary = Math.floor (secondary / 10);
        }
        num1 = Math.floor (num1 / 10);
    }
     
    return true;
}

function noPrime (min, max) {
    var suma = 0;
    
}