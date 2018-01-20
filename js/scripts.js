//biz logic

var divisibleThree = "I'm sorry, Dave. I'm afraid I can't do that.";
var one = "Boop!";
var zero = "Beep!";
var resultArray = [];

var numberRange = function(number) {
  for (var i = 1; i <= number; i += 1) {
    //array.push(i);
  if ((i % 3) === 0) {
    resultArray.push(divisibleThree);
  } else if (i === (1)) {
    resultArray.push(one);
  } else if (i === (0)) {
    resultArray.push(zero);
  } else {
    resultArray.push(i);
  }
}
  return resultArray;
};

//ui logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var number = $("input#number").val();
    var result = numberRange(number);

    $("#result").text(result);
    $("#formOne").trigger("reset");
  });
});
