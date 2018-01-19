//biz logic

var number = $("input#number").val();
var numbers = [];

for (i = 0; i <= number; i++) {
  numbers.push(i);
}

var numbersRange = function(number) {
  if (number % 3 === 0) {
    var divisibleThree = "I'm sorry, Dave. I'm afraid I can't do that.";
    return divisibleThree;
  } else if (number.includes(1)) {
    var numberOne = "boop";
    return numberOne;
  } else if (number.includes(0)) {
    var numberZero = "beep";
    return numberZero;
  } else {
    return ("can't compute yet")
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
