
console.log("new.js conencted")
$(document).ready(function () {
  var input2 = ""
  var x = 0




  $("#submit").on("click", function () {
    event.preventDefault()
    $("#news-display").empty()
    $("#emergencylist").empty()

    var disaster = $(".selectpicker").val()
    //remove spaces
    disaster = disaster.replace(/\s/g, '');
    console.log(disaster)

    console.log(input2)

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
      for (var a = 2; a < (result.length - 2); a++) {
        // console.log("loop running")
        // console.log("----below is results-----")
        // console.log(a + " " + result[a])
        // console.log("------------------------")
        // var eList = $("<ul>");
        // $(eList).attr("class", "Accordion")
        itemDiv = $("<div>")
        itemDiv.append("<a>")
        itemDiv.text(result[a])


        if (a === 0) {
          disasterName = result[1]
          listHead = $("<h2>")
          $(listHead).text(disasterName)
          // eLabel = $("<label>")
          // $(eLabel).attr("for", "checkboxes-menu1")
          // $(eLabel).text(disasterName)

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

        $("#emergencylist").append(`<div><a href="https://www.amazon.com/s?k=${result[a]}&ref=nb_sb_noss_2" target="_blank">${result[a]}</a></div>`)


      }
      //render
      $(".Accordion-item").append(eLabel)
      // $(".Accordion-item").append(input)
      $(".Accordion-subElements").append(subList)

    })
    console.log("dname is" + disasterName)

    // news articles

    if (disaster === "ViralOutbreak") {
      console.log("running conversion")
      disaster = "pandemic"
      return disasterName
    }
    console.log(disaster)
    var query3 = "http://newsapi.org/v2/everything?q=" + disaster + "&apiKey=da7e0cce377a4cea803716a567c813f4";
    console.log(query3)

    $.ajax({
      url: query3,
      method: "GET"
    }).then(function (response) {
      console.log("runnin .then")
      for (var i = 0; i < 4; i++) {

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
        $(newsDiv).attr("id", "newscard")
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

