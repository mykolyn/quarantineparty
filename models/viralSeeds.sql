CREATE TABLE disasters (
    id INTEGER NOT NULL AUTO_INCREMEMNT,
    hurricane VARCHAR(200) NOT NULL,
    flood VARCHAR (200) NOT NULL,
    tsunami VARCHAR (200) NOT NULL,
    earthquake VARCHAR (200) NOT NULL,
    volcano VARCHAR (200) NOT NULL,
    blizzard VARCHAR (200) NOT NULL,
    wild_fire VARCHAR (200) NOT NULL,
    virus VARCHAR (200) NOT NULL

);

INSERT INTO disasters (hurricane)
VALUES ("flashlight")