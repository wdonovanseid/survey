$(document).ready(function() {
  $("form#nameForm").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const food = $("#ffood").val();
    const music = $("input:radio[name=music]:checked").val();
    const favoriteColor = $("#color").val();
    $("#output1").text("hello " + name + " " + food + " " + music " " + favoriteColor);

    const dob = $("#born").val()
    $("#output2").text(dob);
  });
});