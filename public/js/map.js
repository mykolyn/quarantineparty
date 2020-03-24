var lastClicked = "";
$("#death").on("click", function(event) {
  event.preventDefault();
  data = [];

  if (lastClicked === "death") {
    lastClicked = "";
    dFnction();
  } else {
    $.ajax("/api/map/death", {
      type: "GET"
    }).then(function(response) {
      lastClicked = "death";
      displayStatus(response);
      dFnction();
    });
  }
});

$("#infected").on("click", function(event) {
  event.preventDefault();
  data = [];

  if (lastClicked === "infected") {
    lastClicked = "";
    dFnction();
  } else {
    $.ajax("/api/map/infected", {
      type: "GET"
    }).then(function(response) {
      lastClicked = "infected";
      // eslint-disable-next-line eqeqeq
      displayStatus(response);
      dFnction();
    });
  }
});

$("#recovered").on("click", function(event) {
  event.preventDefault();
  data = [];

  if (lastClicked === "recovered") {
    lastClicked = "";
    dFnction();
  } else {
    $.ajax("/api/map/recovered", {
      type: "GET"
    }).then(function(response) {
      lastClicked = "recovered";
      // eslint-disable-next-line eqeqeq
      displayStatus(response);
      dFnction();
    });
  }
});
var myMap = L.map("mapid").setView([39.82, -98.58], 4);

var feature;

L.tileLayer(
  "https://api.mapbox.com/styles/v1/sanjaypatil51/ck7tit8uw4qor1io3asbrrh83/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2FuamF5cGF0aWw1MSIsImEiOiJjazdzbWhhOXcwMDQ0M2VwMDM4aDJyeWtzIn0.ODE2wz8IBWaE8LIWDmT4WQ",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    worldCopyJump: true,
    accessToken:
      "pk.eyJ1Ijoic2FuamF5cGF0aWw1MSIsImEiOiJjazdzbWhhOXcwMDQ0M2VwMDM4aDJyeWtzIn0.ODE2wz8IBWaE8LIWDmT4WQ"
  }
).addTo(myMap);

myMap._initPathRoot();

d3.select("g.parent")
  .selectAll("*")
  .remove();

var svg = d3.select("#mapid").select("svg"),
  g = svg.append("g");

var data = [];

// default display infected at first
$.ajax("/api/map/", {
  type: "GET"
}).then(function(response) {
  displayStatus(response);
  dFnction();
});

function displayStatus(response) {
  for (i in response) {
    // eslint-disable-next-line eqeqeq
    if (response[i].Total_Cases != 0) {
      data.push({
        circle: {
          coords: [response[i].latitude, response[i].longitude],
          radius: (response[i].Total_Cases * 40) / 20000,
          cases: response[i].Total_Cases,
          province: response[i].province,
          country: response[i].country
        }
      });
    }
  }
}

function dFnction() {
  d3.selectAll("circle").remove();
  for (var i = 0; i < data.length; i++) {
    data[i].LatLng = new L.LatLng(
      data[i].circle.coords[0],
      data[i].circle.coords[1]
    );
  }

  // eslint-disable-next-line camelcase
  var tool_tip = d3
    .tip()
    .attr("class", "d3-tip")
    .offset([-8, 0])
    .html(function() {
      return (
        "Country: " +
        d3.select(this).attr("country") +
        " Province/State: " +
        d3.select(this).attr("province-state") +
        " Cases: " +
        d3.select(this).attr("cases")
      );
    });
  svg.call(tool_tip);

  feature = g
    .selectAll("circle")
    // .remove()
    .data(data)
    .enter()
    .append("svg:circle")
    .attr("cx", function(d) {
      console.log(d);
      return d.circle.coords.x;
    })
    .attr("cy", function(d) {
      return d.circle.coords.y;
    })
    .style("stroke", "black")
    .style("opacity", 0.3)
    .style("fill", function() {
      if (lastClicked === "death") {
        return "red";
      } else if (lastClicked === "infected") {
        return "yellow";
      } else if (lastClicked === "recovered") {
        return "green";
      } else {
        return "white";
      }
    })
    .attr("r", function(d) {
      if (d.circle.radius < 10) {
        return 10;
      } else if (d.circle.radius > 10 && d.circle.radius < 40) {
        return 25;
      } else if (d.circle.radius > 40 && d.circle.radius < 80) {
        return 40;
      } else if (d.circle.radius > 80) {
        return 60;
      }
    })
    .attr("cases", function(d) {
      return d.circle.cases;
    })
    .attr("country", function(d) {
      return d.circle.country;
    })
    .attr("province-state", function(d) {
      return d.circle.province;
    })
    // eslint-disable-next-line camelcase
    .on("mouseover", tool_tip.show)
    // eslint-disable-next-line camelcase
    .on("mouseout", tool_tip.hide);

  update();
}

myMap.on("viewreset", update);

myMap.on("moveend", update);

function update() {
  feature.attr("transform", function(d) {
    return (
      "translate(" +
      myMap.latLngToLayerPoint(d.LatLng).x +
      "," +
      myMap.latLngToLayerPoint(d.LatLng).y +
      ")"
    );
  });
}
