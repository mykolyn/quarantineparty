var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
  // auction route
  app.get("/api/auction", function(req, res) {
    db.tp_auctions.findAll({}).then(function(data) {
      res.json(data);
    });
  });
  app.post("/api/auction", function(req, res) {
    db.tp_auctions
      .create({
        name: req.body.name,
        price: req.body.price
      })
      .then(function(data) {
        res.json(data);
      });
  });
  app.put("/api/auction", function(req, res) {
    db.tp_auctions
      .update(
        {
          price: req.body.price
        },
        {
          where: {
            id: req.body.id
          }
        }
      )
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        res.json(err);
      });
  });
  app.delete("/api/auction/:id", function(req, res) {
    db.tp_auctions
      .destroy({
        where: {
          id: req.params.id
      }
    }).then(function(data) {
      res.json(data);
    });
  });
  // countries geolocation
  app.get("/api/map/countryIs/:country", function(req, res) {
    db.countries
      .findAll({
        where: {
          name: req.params.country
        }
      })
      .then(function(data) {
        // console.log(data);
        res.json(data);
      });
  });
  // leaflet mapping
  app.get("/api/map/", function(req, res) {
    db.corona
      .findAll({
        attributes: [
          "province",
          "country",
          "latitude",
          "longitude",
          [
            db.corona.sequelize.fn("sum", db.corona.sequelize.col("infected")),
            "Total_Cases"
          ]
        ],
        group: ["province", "country", "latitude", "longitude"]
      })
      .then(function(data) {
        // console.log(data);
        res.json(data);
      });
  });
  // clicking on the filter
  app.get("/api/map/:status", function(req, res) {
    db.corona
      .findAll({
        attributes: [
          "province",
          "country",
          "latitude",
          "longitude",
          [
            db.corona.sequelize.fn(
              "sum",
              db.corona.sequelize.col(req.params.status)
            ),
            "Total_Cases"
          ]
        ],
        group: ["province", "country", "latitude", "longitude"]
      })
      .then(function(data) {
        // console.log(data);
        res.json(data);
      });
  });

  app.get("/api/map/disaster/:disasters", function(req, res) {
    db.emergency_list
      .findAll({
        where: {
          name: req.params.disasters
        }
      })
      .then(function(data) {
        // console.log(data);
        res.json(data);
      });
  });
  
  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });
  // to_buy routing
  // app.post("/api/posts", function(req, res) {
  //   // Add sequelize code for creating a post using req.body,
  //   // then return the result using res.json
  //   db.toBuy.create({
  //     title: req.body.title,
  //     body:req.body.body,
  //     category: req.body.category
  //   }).then(function(results) {
  //     res.json(results);
  //   })
  //   });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
