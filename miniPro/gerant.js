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

app.post("/inscription_h.html", function (req, res) {
  var firstname = req.body.fname;
  var lastname = req.body.lname;
  var phonenumber = req.body.phone;
  var gender = req.body.gender;
  var birthday_ = req.body.birthday;
  var subject_1 = req.body.subject1;

  var email = req.body.email;

  var data = {
    members: [{
      email_address: email,
      status: "pending",
      merge_fields: {
        FNAME: firstname,
        LNAME: lastname,
        PHONE: phonenumber,
        BIRTHDAY: birthday_,
        SUBJECT1: subject_1,
        GENDER: gender,
        SUBJECT2: subject_2
      }
    }]
  };

  var jsonData = JSON.stringify(data);

  var options = {
    url: "https://us19.api.mailchimp.com/3.0/lists/a14d23370f",
    method: "POST",
    headers: {
      Authorization: "Tahar 02152c3ded3184df247e53003a16cce3-us19"
    },
    body: jsonData
  };

  request(options, function (error, res, body) {
    console.log(response.statusCode);

    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
  });
});

app.post("/inscription_h.html", function (req, res) {
  var firstname = req.body.fname;
  var lastname = req.body.lname;
  var phonenumber = req.body.phone;
  var gender = req.body.gender;
  var birthday_ = req.body.birthday;
  var subject_1 = req.body.subject1;
  var subject_2 = req.body.subject2;

  var email = req.body.email;

  var data = {
    members: [{
      email_address: email,
      status: "pending",
      merge_fields: {
        FNAME: firstname,
        LNAME: lastname,
        PHONE: phonenumber,
        BIRTHDAY: birthday_,
        SUBJECT1: subject_1,
        GENDER: gender,
        SUBJECT2: subject_2
      }
    }]
  };

  var jsonData = JSON.stringify(data);

  var options = {
    url: "https://us19.api.mailchimp.com/3.0/lists/a14d23370f",
    method: "POST",
    headers: {
      Authorization: "Tahar 02152c3ded3184df247e53003a16cce3-us19"
    },
    body: jsonData
  };

  request(options, function (error, res, body) {
    console.log(response.statusCode);

    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
  });
});

app.post("/inscription_f.html", function (req, res) {
  var firstname = req.body.fname;
  var lastname = req.body.lname;
  var phonenumber = req.body.phone;
  var gender = req.body.gender;
  var birthday_ = req.body.birthday;
  var subject_1 = req.body.subject1;
  var subject_2 = req.body.subject2;

  var email = req.body.email;

  var data = {
    members: [{
      email_address: email,
      status: "pending",
      merge_fields: {
        FNAME: firstname,
        LNAME: lastname,
        PHONE: phonenumber,
        BIRTHDAY: birthday_,
        SUBJECT1: subject_1,
        GENDER: gender,
        SUBJECT2: subject_2
      }
    }]
  };

  var jsonData = JSON.stringify(data);

  var options = {
    url: "https://us19.api.mailchimp.com/3.0/lists/a14d23370f",
    method: "POST",
    headers: {
      Authorization: "Tahar 02152c3ded3184df247e53003a16cce3-us19"
    },
    body: jsonData
  };

  request(options, function (error, res, body) {
    console.log(response.statusCode);

    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
  });
});

app.post("/failure.html", function (req, res) {
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port 3000");
});

/* GET HOME PAGE */

/* API KEY :  02152c3ded3184df247e53003a16cce3-us19 */

/* ID : a14d23370f. */

/* Changing error messages */