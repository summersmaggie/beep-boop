//biz logic

var divisibleThree = "I'm sorry, Dave. I'm afraid I can't do that.";
var one = "Boop!";
var zero = "Beep!";

//returns array but no output
var numberRange = function(number) {
  var resultArray = [];
  for (var i = 0; i < number; i += 1) {
    //array.push(i);
  if((i % 3) === 0) {
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



/*/var divisibleThree = function(number) {
  for (var index = 0; index < number; index += 1) {
    array.push(index);
  }
  if (array.includes(number % 3 === 0)) {
    return ("I'm sorry, Dave. I'm afraid I can't do that.");
  } else {
    return array;
  }
};/*/


//returns output but no array
/*/var numberOutput = function(number) {
  if (number % 3 === 0) {
    return divisibleThree;
  } else if (number.includes(1)) {
    return one;
  } else if (number.includes(0)) {
    return zero;
  }
}; /*/


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
