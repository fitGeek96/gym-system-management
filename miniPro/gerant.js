/* GERANT  */
//jshint esversion:6

var express = require("express");
const bodyParser = require("body-parser");
var app = express();
const request = require("request");

app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/inscription_h.html", function (req, res) {
  res.sendFile(__dirname + "/inscription_h.html");
});

app.get("/inscription_f.html", function (req, res) {
  res.sendFile(__dirname + "/inscription_f.html");
});

app.get("/success.html", function (req, res) {
  res.sendFile(__dirname + "/success.html");
});

app.get("/failure.html", function (req, res) {
  res.sendFile(__dirname + "/failure.html");
});

app.get("/reserver.html", function (req, res) {
  res.sendFile(__dirname + "/reserver.html");
});

app.get("/reglementaire.html", function (req, res) {
  res.sendFile(__dirname + "/reglementaire.html");
});


app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port 3000");
});

/* GET HOME PAGE */

/* API KEY :  02152c3ded3184df247e53003a16cce3-us19 */

/* ID : a14d23370f. */

/* Changing error messages */