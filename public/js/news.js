
console.log("new.js conencted")
$(document).ready(function () {
  var input2 = ""
  var query3 = ""
  var x = 0
  var test = ""


  $("#submit").on("click", function () {
    event.preventDefault()

  })



  $("#submit").on("click", function () {
    // $(document).on("click", "#submit", function(){     
    event.preventDefault()
    input2 = $("#input123").val()
    console.log(input2)
    var query3 = "http://newsapi.org/v2/everything?q=" + input2 + "&apiKey=da7e0cce377a4cea803716a567c813f4";
    console.log("submit clicked")
    // console.log(query3)

    //emergency list
    var disasterName = ""
    var disaster = $(".selectpicker").val()
    console.log(disaster + "AAAAAAAAAAAAAAAAAAAAAA")
    $.ajax("/api/map/disaster/" + disaster, {
      type: "GET",

      // data: emergencyList
    }).then(function (res) {
      console.log(res)
      var obj = res[0]
      var result = Object.keys(obj).map(function (key) {
        return obj[key];
      });

      console.log("this should be disaster name:" + result[1]);
      console.log(result.length)
      var disasterName
      var sublist
      for (var a = 1; a < (result.length-2); a++) {
        // console.log("loop running")
        // console.log("----below is results-----")
        // console.log(a + " " + result[a])
        // console.log("------------------------")
        // var eList = $("<ul>");
        // $(eList).attr("class", "Accordion")
        itemDiv = $("<div>")
        $(itemDiv).text(result[a])
        
        if (a === 0) {
          disasterName = result[1]

          eLabel = $("<label>")
          $(eLabel).attr("for", "checkboxes-menu1")
          $(eLabel).text(disasterName)

          //  input = $("<input>")
          //   $(input).attr("id", "checkboxes-menu1")
          //   $(input).attr("type", "checkbox")
          //   $(input).attr("name", "menu")
          // console.log("Adfadfadf" +eLabel)

          console.log("title on html should show" + disasterName)


        }
        subList = $("<li>")
        $(sublist).attr("class", "Accordion-subElement")
        $(sublist).text(result[a])

        console.log("Asdasdasd" + subList)

      $("#emergencylist").append(itemDiv)


      }
      //render
      $(".Accordion-item").append(eLabel)
      // $(".Accordion-item").append(input)
      $(".Accordion-subElements").append(subList)

    })
    console.log("dname is" + disasterName)

    // news articles
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
        $(cardBody).attr("class", "card-body")

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


        // console.log("_____________________")
        // console.log(response.articles[i])
        // console.log("_____________________")
      }

    })

  })
})

