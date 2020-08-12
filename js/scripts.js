$(document).ready(function() {
  $("form#name").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    $("#output1").text(name);
  });
});