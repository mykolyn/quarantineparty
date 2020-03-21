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

L.tileLayer(
  "https://api.mapbox.com/styles/v1/sanjaypatil51/ck7tit8uw4qor1io3asbrrh83/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2FuamF5cGF0aWw1MSIsImEiOiJjazdzbWhhOXcwMDQ0M2VwMDM4aDJyeWtzIn0.ODE2wz8IBWaE8LIWDmT4WQ",
  {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1Ijoic2FuamF5cGF0aWw1MSIsImEiOiJjazdzbWhhOXcwMDQ0M2VwMDM4aDJyeWtzIn0.ODE2wz8IBWaE8LIWDmT4WQ"
  }
).addTo(myMap);

myMap._initPathRoot();

var svg = d3.select("#mapid").select("svg"),
  g = svg.append("g");

var data = [
  { circle: { coords: [37.338, -121.8863], radius: 20 } },
  { circle: { coords: [40.71, -74], radius: 50 } }
];

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
  .html(function(d) {
    return "Radius: " + d3.select(this).attr("r");
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
    if (d.circle.radius < 21) {
      return "purple"
    } else {
      return "red";
    }
  })
  .attr("r", function(d) {
    return d.circle.radius;
  })
  // eslint-disable-next-line camelcase
  .on("mouseover", tool_tip.show)
  // eslint-disable-next-line camelcase
  .on("mouseout", tool_tip.hide);

myMap.on("viewreset", update);

function update() {
  feature.attr("transform", function(d) {
    // eslint-disable-next-line prettier/prettier
    return "translate(" +
      myMap.latLngToLayerPoint(d.LatLng).x +
      myMap.latLngToLayerPoint(d.LatLng).y +
      // eslint-disable-next-line prettier/prettier
      ")"
  });
}

update();
