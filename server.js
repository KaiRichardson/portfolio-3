var express = require("express");

var app = express();
var port = process.env.PORT || 8050;

// Serve static files
app.use(express.static("public"));

// Routes
require("./routes/html-routes.js")(app);

// Starting the server, syncing our models ------------------------------------/
app.listen(port, function() {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    port,
    port
  );
});

module.exports = app;
