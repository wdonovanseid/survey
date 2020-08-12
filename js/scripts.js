$(document).ready(function() {
  $("form#nameForm").submit(function(event) {
    event.preventDefault();
    const result = $("#name").val();
    const beverage = $("#beverage").val();
    $("#output1").text("hello " + result + " " + beverage);

    
  });
});