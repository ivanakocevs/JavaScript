var result1 = calculatePrice(890, 46);
var result2 = calculatePrice(650, 60);

alert(result1);
alert(result2);

function calculatePrice(price, quantity) {
    var result = price * quantity;
    return result;
}