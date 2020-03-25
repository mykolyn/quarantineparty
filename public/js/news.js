console.log("new.js conencted")
$(document).ready(function () {
var input2 = ""
var query3 =""
var x = 0
$("#submit").on("click", function(){
    // $(document).on("click", "#submit", function(){     
      event.preventDefault()
         input2 = $("#input123").val()

       console.log(input2)
           var query3 = "http://newsapi.org/v2/everything?q=" + input2 + "&apiKey=da7e0cce377a4cea803716a567c813f4";

console.log(query3)
    $.ajax({
        url: query3,
      method: "GET"
    }).then(function (response) {
      console.log("runnin .then")
      for (var i = 0; i < 10; i++) {

        if (i % 1 == 0) {
         
          var newSection = $("<div>")
          $(newSection).attr("class", "card-deck")
          //var x = 0
          x++
          $(newSection).attr("data-x", x)
          // new renders appear on top
          $("#news-display").prepend(newSection)
          console.log("sections")
         // console.log("newSection should appear")
      }

      var newsDiv = $("<div>");
            $(newsDiv).attr("class", "card")

          //card-body element
          var cardBody = $("<div>");
            $(cardBody).attr("class","card-body")

            //create title
            var title = response.articles[i].title
            var cardHead = $("<h5>")
            $(cardHead).text(title)

            //create content
            var newsContent = response.articles[i].content;
            var p = $("<p>")
            $(p).attr("class", "card-text")
            $(p).text(newsContent);
            
            //render news cards
            newsDiv.append(cardHead)
            newsDiv.append(newsContent)

$(newSection).prepend(newsDiv)

// // var title = articles[i].title
// // var div = $("<div>")
// // var newblock = $(div).addclass("articleBlock" + i)

// // $("#card-block").append(newblock)
        console.log("_____________________")
        console.log(response.articles[i])
        console.log("_____________________")
      }

    })

  })
})
