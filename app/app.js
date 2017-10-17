const express = require("express");
const app = express();

const APPLICATION_NAME = "docker-express-starter"; // TODO: read from env vars
const APPLICATION_PORT = 3000; // TODO: read from env vars

app.get("/", function(request, response) {
    response.json({
        application_name: APPLICATION_NAME,
        application_port: APPLICATION_PORT
    });
});

app.get("/health-check", function(request, response) {
    console.log(APPLICATION_NAME + " running on port " + APPLICATION_PORT);
    response.setStatus(200);
    response.end();
})

app.listen(APPLICATION_PORT, function() {
    console.log(APPLICATION_NAME + " started on port " + APPLICATION_PORT);
});