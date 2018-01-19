//biz logic





//ui logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var number = $("input#number").val();
    var result = newNumber(number);

    $("result").text(result);
    $("#formOne").trigger("reset");
  });
});
