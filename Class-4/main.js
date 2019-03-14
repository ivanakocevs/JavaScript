function sayHi () {
    var i = 0;
    while (i < 20) {
        console.log("Hai there");
        i++;
        if (i === 10) {
            break;
        }
    }
    console.log("Function has ended");
}

sayHi();

function sayHi () {
    var i = 0;
    while (i < 20) {
        console.log("Hai there");
        i++;
        if (i === 10) {
            return; /*ovde ke zavrsi funkcijata nema da se pokaze function has ended*/
        }
    }
    console.log("Function has ended");
}

sayHi();


function largestValue () {
    var i = 0;
    var biggest = 0;
    while (i < 10) {
        var randomNum =Math.random();
        console.log("current number is", randomNum);
        i++;
        if (randomNum > biggest) {
            biggest = randomNum;
        
        }
        
    }
    console.log("biggest number is", biggest);
}
largestValue();

function sumSquares () {
    var i = 101;
    var sum = 0;

    while (i <= 150) {
        var sqr = Math.pow(i,2);
        i++;
        console.log(sqr);
        sum += sqr;
    }
    console.log("the result is", sum);
}

sumSquares();

function sumOfNumbers (number) {
    var suma = 0;
    while(number) {
        var cifra = number % 10;
        suma += cifra;
        number = Math.floor(number / 10);
    }

    console.log ("the sum is", suma);

}
sumOfNumbers(3453);