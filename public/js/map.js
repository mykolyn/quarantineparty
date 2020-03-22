// var db = require("../models");

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

var svg = d3.select("#mapid").select("svg"),
  g = svg.append("g");

// var data = [
//   { circle: { coords: [37.338, -121.8863], radius: 20 } },
//   { circle: { coords: [40.71, -74], radius: 50 } },
//   { circle: { coords: [28.61, 77], radius: 15 } }
// ];

var data = [];

$.ajax("/api/map/", {
  type: "GET"
}).then(function (response) {
  console.log("Map Data");
  console.log(response[0].country);
  // Reload the page to get the updated list
  // location.reload();
  for (i in response) {
    data.push(
      // eslint-disable-next-line prettier/prettier
      {circle: {coords: [
// eslint-disable-next-line prettier/prettier
        // eslint-disable-next-line prettier/prettier
        // eslint-disable-next-line prettier/prettier
        response[i].latitude,    
        response[i].longitude],
      radius: (response[i].Total_Cases * 40) / 20000,
// eslint-disable-next-line prettier/prettier
      cases: response[i].Total_Cases,
      // eslint-disable-next-line prettier/prettier
      province: response[i].province,
      // eslint-disable-next-line prettier/prettier
      country: response[i].country

      
// eslint-disable-next-line prettier/prettier

      }}
    );
    console.log("data array");
    console.log(data);
  }
  dFnction();
});

function dFnction() {
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
    // eslint-disable-next-line no-unused-vars
    .html(function(d) {
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
    .style("fill", function(d) {
      // if (d.circle.radius < 21) {
      //   return "purple";
      // } else {
      //   return "red";
      // }
      return "red";
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
    // eslint-disable-next-line prettier/prettier
    return ("translate(" +
      myMap.latLngToLayerPoint(d.LatLng).x +
      "," +
      myMap.latLngToLayerPoint(d.LatLng).y +
      // eslint-disable-next-line prettier/prettier
      ")"
    );
  });
}
