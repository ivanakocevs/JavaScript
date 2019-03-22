$(document).ready(function() {

    $("<div>")
    .addClass("calculator")
    .width("260px")
    .height("400px")
    .css("background-color", "gray")
    .css("border", "1px solid black")
    .css("border-radius", "10px")
    .appendTo("body");

    $("<input>")
    .addClass("calculator_display")
    .css("background-color", "red")
    .css("border", "1px solid black")
    .css("border-radius", "10px")
    .val("0", "25px")
    .css("font-size", "40px")
    .css("padding", "5px")
    .css("text-align", "right")
    .appendTo(".calculator");

    $("<div>")
    .addClass("calculator_keys")
    .css("background-color", "lightblue")
    .css("border", "1px solid black")
    .css("border-radius", "10px")
    .appendTo(".calculator");

    /*for (var index = 0; index < 20; index++) {
        $("<button>")
    .css("background-color", "orange")
    .css("border", "1px solid black")
    .css("border-radius", "10px")
    .appendTo(".calculator_keys")
      
    }*/

    $("<button>7</button>")
    .appendTo(".calculator_keys")
    .addClass("buttons")

    $("<button>8</button>")
    .appendTo(".calculator_keys")
    .addClass("buttons")

    $("<button>9</button>")
    .appendTo(".calculator_keys")
    .addClass("buttons")

    $("<button>+</button>")
    .appendTo(".calculator_keys")
    .addClass("buttons")

    $("<button>4</button>")
    .appendTo(".calculator_keys")
    .addClass("buttons")

    $("<button>5</button>")
    .appendTo(".calculator_keys")
    .addClass("buttons")

    $("<button>6</button>")
    .appendTo(".calculator_keys")
    .addClass("buttons")

    $("<button>-</button>")
    .appendTo(".calculator_keys")
    .addClass("buttons")

    $("<button>1</button>")
    .appendTo(".calculator_keys")
    .addClass("buttons")

    $("<button>2</button>")
    .appendTo(".calculator_keys")
    .addClass("buttons")

    $("<button>3</button>")
    .appendTo(".calculator_keys")
    .addClass("buttons")

    $("<button>*</button>")
    .appendTo(".calculator_keys")
    .addClass("buttons")

    $("<button>0</button>")
    .appendTo(".calculator_keys")
    .addClass("buttons")

    $("<button>%</button>")
    .appendTo(".calculator_keys")
    .addClass("buttons")

    $("<button>.</button>")
    .appendTo(".calculator_keys")
    .addClass("buttons")

    $("<button>/</button>")
    .appendTo(".calculator_keys")
    .addClass("buttons")

    $("<button>=</button>")
    .appendTo(".calculator_keys")
    .addClass("buttons")
    .addClass("button_17")

    $("<button>C</button>")
    .appendTo(".calculator_keys")
    .addClass("buttons")
    .addClass("button_18")

});