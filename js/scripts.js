//biz logic

/*/var newNumber = function(number) {
  if (number.includes(charAt[1])) {
    re
  }

  if (number.includes(1)) {
  newNumber.push("boop");

  for (var i = 0; i < 10; i++) {
    //total += 10;
  }
  alert("Your range is: " + newNumber);
};/*/


//ui logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var number = $("input#number").val();
    var rangeNumbers = "";
    var i;

    for (i = 0; i < number; i++) {
      //console.log(i);
    }

    $(".result").text(result);
    //var number = $("input#number").val();
    //var result = newNumber(number);

    $("#formOne").trigger("reset");
  });
});
