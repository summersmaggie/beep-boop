//biz logic

var number = $("input#number").val();
var numbers = [];

for (i = 0; i <= number; i++) {
  numbers.push(i);
}

var numbersRange = function(number) {
  if (number.includes(1)) {
    var numberOne = "boop";
    return numberOne;
  } else if (number.includes(0)) {
    var numberZero = "beep";
    return numberZero;
  }
};


//ui logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var number = $("input#number").val();
    var result = numbersRange(number);

    $("#result").text(result);
    $("#formOne").trigger("reset");
  });
});
