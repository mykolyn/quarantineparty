function display() {
    $(".item-display").empty();
    $.ajax("api/auction", {
        type: "GET"
      }).then(function(response) {
        console.log(response);
        for (var i = 0; i < response.length; i++) {
          var ranNum = Math.floor(Math.random() * 100) + 100
          // console.log(ranNum);
          $(".item-display").append(
              `<div class="card col-3">
                  <h4 class="card-title">${response[i].id}. ${response[i].name}</h4>
                  <div class="card-body">
                      <img src="https://picsum.photos/100" alt="ran_img">
                      <h4>$${response[i].price}</h4>
                      <button class="bid-price" data-id="${response[i].id}" data-value="0.5" data-price="${response[i].price}">$0.50
                      <button class="bid-price" data-id="${response[i].id}" data-value="2" data-price="${response[i].price}">$2
                      <button class="bid-price" data-id="${response[i].id}" data-value="5" data-price="${response[i].price}">$5
                  </div>
              </div>`
              );
          }
          post();
      });
}
display();
function post() {
    $(".add-item").on("click", function (event) {
        event.preventDefault();
        var name = $("#item-name").val().trim();
        var price = $("#item-price").val().trim();
        var addItem = {
            name: name,
            price: price
        };

        console.log(addItem);
        $.post("/api/auction", addItem, display);
    })
}


// function start() {
//     $(".bid-price").on("click", function(event) {
//         event.preventDefault();
//         var id = $(this).data("id");
//         var bid = $(this).data("value");
//         var currentPrice = $(this).data("price") + bid;
//         var newPrice = {
//             price: currentPrice
//         }
//         console.log(currentPrice);
//         $.ajax("/api/auction/"+id, {
//             type: "POST",
//             data: newPrice
//         }).then(function(res) {
//             display();
//         })
//     });
// }
