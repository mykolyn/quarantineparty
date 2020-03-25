function display() {
    $(".item-display").empty();
    $.ajax("api/auction", {
        type: "GET"
      }).then(function(response) {
        console.log(response);
        for (var i = 0; i < response.length; i++) {
          var ranNum = Math.floor(Math.random() * 300) + 100;
          console.log(ranNum);
          $(".item-display").append(
              `<div class="card col-3 m-1">
                  <h4 class="card-title">Item ID: ${response[i].id}</h4><hr>
                  <div class="card-body">
                      <h4>${response[i].name}</h4>
                      <img src="https://picsum.photos/id/${ranNum}/100" alt="ran_img">
                      <h4>$${response[i].price}</h4>
                      <button class="bid-price mr-1 btn btn-primary" data-id="${response[i].id}" data-value="0.5" data-price="${response[i].price}">$0.50
                      <button class="bid-price mr-1 btn btn-primary" data-id="${response[i].id}" data-value="2" data-price="${response[i].price}">$2
                      <button class="bid-price r-1 btn btn-primary" data-id="${response[i].id}" data-value="5" data-price="${response[i].price}">$5<br>
                      <button class="btn btn-success mt-1 buy" data-id=${response[i].id}>Buy
                  </div>
              </div>`
              );
          }
        $(".buy").on("click", function (event) {
            console.log('test')
            event.preventDefault();
            var id = $(this).data("id");
            console.log(id);
            $.ajax({
                method: "DELETE",
                url: "/api/auction/" + id
                }).then(display);
        });
        $(".bid-price").on("click", function(event) {
            event.preventDefault();
            var id = $(this).data("id");
            var bid = $(this).data("value");
            var currentPrice = $(this).data("price") + bid;
            var newPrice = {
                price: currentPrice,
                id: id
            }
            console.log(currentPrice);
            $.ajax("/api/auction/", {
                type: "PUT",
                data: newPrice
            }).then(display);
        });

    });
}
display();

$(".add-item").on("click", function (event) {
    event.preventDefault();
    var name = $("#item-name").val().trim();
    var price = $("#item-price").val().trim();
    var addItem = {
        name: name,
        price: price
    };

    $.post("/api/auction", addItem, display);
    $("#item-name").val("");
    $("#item-price").val("");
});



