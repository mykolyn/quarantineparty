var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // app.get("/api/map", function(req, res) {
  //   db.corona.findAll({ where: { country: "India" } }).then(function(data) {
  //     // console.log(data);
  //     res.json(data);
  //   });
  // });

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
        console.log(data);
        res.json(data);
      });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
