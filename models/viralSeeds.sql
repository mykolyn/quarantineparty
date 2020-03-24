DROP DATABASE IF EXISTS emergency_db;
CREATE DATABASE emergency_db;
USE emergency_db;
CREATE TABLE disaster (
   id INTEGER NOT NULL AUTO_INCREMENT,
   disaster VARCHAR(200) NOT NULL,
   item_1 VARCHAR(50) NOT NULL,
   item_2 VARCHAR(50) NOT NULL,
   item_3 VARCHAR(50) NOT NULL,
   item_4 VARCHAR(50) NOT NULL,
   item_5 VARCHAR(50) NOT NULL,
   item_6 VARCHAR(50) NOT NULL,
   item_7 VARCHAR(50) NOT NULL,
   item_8 VARCHAR(50) NOT NULL,
   item_9 VARCHAR(50) NOT NULL,
   item_10 VARCHAR(50) NOT NULL,
   item_11 VARCHAR(50) NOT NULL,
   PRIMARY KEY(id)

);

INSERT INTO disaster (disaster, item_1, item_2, item_3, item_4, item_5, item_6, item_7, item_8, item_9, item_10, item_11)
VALUES ("volcano", "flashlight", "extra batteries", "first aid kit", "non-perishable food", "water", "essential medications", "respiratory protectiona", "eye protection", "battery power radio", "cash", "important documents");

INSERT INTO disaster (disaster, item_1, item_2, item_3, item_4, item_5, item_6, item_7, item_8, item_9, item_10, item_11)
VALUES ("wildfire", "water", "non-perishable food", "medications", "first aid kid", "battery powered radio","flashlights", "cash", "respiratory protection", "eye protection", "important documents", "water purification kit");

INSERT INTO disaster (disaster, item_1, item_2, item_3, item_4, item_5, item_6, item_7, item_8, item_9, item_10, item_11)
VALUES ("hurricane", "water", "non-perishable food", "battery powered or hand crank radio", "flashlight", "safety whistle", "dust mask", "tools to turn off utilities", "local maps", "cash", "water purification kit", "toilettries");

INSERT INTO disaster (disaster, item_1, item_2, item_3, item_4, item_5, item_6, item_7, item_8, item_9, item_10, item_11)
VALUES ("blizzard", "weather seal", "snow shovel", "snow melt or rock salt", "candles", "food", "flashlights", "battery power radio", "books, art supplies, and board games", "medications", "first aid kit", "blankets");

INSERT INTO disaster (disaster, item_1, item_2, item_3, item_4, item_5, item_6, item_7, item_8, item_9, item_10, item_11)
VALUES ("flood", "water purification kit", "3600 calorie food bars", "flashlights", "emergency blankets", "rain poncho", "water storage container", "inflatable raft", "cash", "battery-powered or crank radio", "signal light", "emergency whistle");

INSERT INTO disaster (disaster, item_1, item_2, item_3, item_4, item_5, item_6, item_7, item_8, item_9, item_10, item_11)
VALUES ("tsunami", "water", "3600 calorie bars", "medications", "first aid kit", "flashlights and crisis light", "batteries", "battery-powered or crank radio", "emergency whistle", "cash", "flotation device", "flashlights");

INSERT INTO disaster (disaster, item_1, item_2, item_3, item_4, item_5, item_6, item_7, item_8, item_9, item_10, item_11)
VALUES ("earthquake", "water purification kit", "jacket or sweathshirt", "flashlights", "battery-powered or crank radio", "first aid kit", "medications", "water", "non-perishable food", "cash", "batteries", "first aid kit");

INSERT INTO disaster (disaster, item_1, item_2, item_3, item_4, item_5, item_6, item_7, item_8, item_9, item_10, item_11)
VALUES ("viral pandemic", "hand sanitizer", "respiratory protection", "gloves", "toilet paper", "surface wipes", "bleach", "vitamins", "cough and cold medicaiton", "non-perishable food", "cash", "latex gloves");

SELECT * FROM disaster;