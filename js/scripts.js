$(document).ready(function() {
  $("form#nameForm").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const beverage = $("#beverage").val();
    const flavor = $("input:radio[name=flavor]:checked").val();
    $("#output1").text("hello " + name + " " + beverage + " " + flavor);

    const dob = $("#born").val()
    $("#output2").text(dob);
  });
});