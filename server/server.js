// Client ID
// 45bd485f259d4c7c9fc04c5554b147fc
// Client Secret
// d8ffe8a175524fc5b8fcfdcd3c5b13e2

var express = require('express');
var app = express();
var SpotifyWebApi = require('spotify-web-api-node');

app.use("/", express.static("build"));

var spotifyApi = new SpotifyWebApi({
  clientId : '45bd485f259d4c7c9fc04c5554b147fc',
  clientSecret : 'd8ffe8a175524fc5b8fcfdcd3c5b13e2',
  redirectUri : 'http://localhost:8080/callback'
});

app.get("/api", function(req, res) {
	// searchTracks (can be changed) specify's search key word
  // we should add a query "request.query" as a parametre
  //add query to body**

  //var q = req.query.q (this allows us to search by query + search variable in the url endpoint)
  var q = req.query.q
  //the arguement q in searchTracks(arguement) is the search term for the get request
	spotifyApi.searchTracks(q)
  .then(function(data) {
    console.log('Artist albums', data.body);
    res.send(data.body);
  }, function(err) {
    console.error(err);
  });

});

app.listen(8080, function() {
	console.log("LIstening to the port 8080");
});