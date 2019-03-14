function celsiusToFahrenheit(x) {
    var result =x*1.8+32;
    return result;
}
var result = celsiusToFahrenheit(15);
alert(result);


function fahrenheitToCelsious(y){
    var resultt =(5/9)*(y-32);
    return resultt;
}
var resultt = fahrenheitToCelsious(50);
console.log(resultt);


function calculateTotalPrice(itemPrice) {
    return itemPrice * 1.05 * 1.18;
}

var priceOfTrotinetFromSolun = calculateTotalPrice(420);


/* Celsius to Fahrenheit and reverse*/

function convertTemperature (temperature, type){
    if (type === "celsius"){
        return temperature * 1.8 +32;
    } else if (type === "fahrenheit") {
        return (5/9) * (temperature - 32);

    } else {
        return temperature;
    }
}

var fahr = convertTemperature(38, "celsius");
var cels = convertTemperature(88, "fahrenheit");
var sumNu = convertTemperature(300);
/*moze i vaka*/
if (type == "celsius"){
    return temperature * 1.8 +32;
} 
if (type == "fahrenheit") {
    return (5/9) * (temperature - 32);

} 
return temperature;



