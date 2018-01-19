//biz logic


var numbersRange = function(number) {
  for (var index = 0; index < number; index += 1) {
    console.log(index);
  if (number.includes(1)) {
    var numberOne = "boop";
  }
    return numberOne;
  }
};


  /*/} else if (number.includes(0)) {
    var numberZero = number.push("beep");
  }
}
};/*/



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
