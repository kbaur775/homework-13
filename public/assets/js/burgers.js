$(document).ready(function() {
  $("#submit-burger").on("click", function() {
    var burger = { "name": $("#burger-name").val() };
    console.log(burger);
    var posting = $.post("/burger", burger);
    posting.done(x => location.reload());
  });

  $(".devour-btn").on("click", function() {
    var putting = $.ajax("/burger/" + $(this).data("id"), {type: "PUT"});
    putting.done(x => location.reload());
  });
});