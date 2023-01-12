const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const ejs = require("ejs")


const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

var category = 'happiness';

app.route("/")
    .get(function (req, res) {


        request.get({
            url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
            headers: { 'X-Api-Key': 'f/9F1qK7ZnGTZV6NX6h6Yw==5SoJxUe9OVhAqvjN' },
        }, function (error, response, body) {
            if (error) {
                console.error('Request failed:', error);
            } else {
                // getting the quote
                let parsedBody = (JSON.parse(body));
                var author = parsedBody[0].author;
                var advice = parsedBody[0].quote;
            }
            res.render("index.ejs", { adviceTitle: advice, authorName: author })

        });

    })
    .post(function (req, res) {
        console.log(req.body);
        request.get({
            url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
            headers: { 'X-Api-Key': 'f/9F1qK7ZnGTZV6NX6h6Yw==5SoJxUe9OVhAqvjN' },
        }, function (error, response, body) {
            if (error) {
                console.error('Request failed:', error);
            } else {
                // getting the quote
                let parsedBody = (JSON.parse(body));
                var author = parsedBody[0].author;
                var advice = parsedBody[0].quote;
                console.log(parsedBody);
            }
            res.render("index.ejs", { adviceTitle: advice, authorName: author })

        });
    })




// API Key: f/9F1qK7ZnGTZV6NX6h6Yw==5SoJxUe9OVhAqvjN


app.listen(3000, function () {
    console.log("Server Started 3000");
});