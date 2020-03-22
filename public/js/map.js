$("#death").on("click", function(event) {
  event.preventDefault();
  $(".display-map").html("<h1>This will show the amount of death");
  console.log("this is deaths");
});

$("#infected").on("click", function(event) {
  event.preventDefault();
  $(".display-map").text("This is the amount of infected");
  console.log("the amount of infected");
});
