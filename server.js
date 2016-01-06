// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

var mustacheExpress = require('mustache-express');
var parseString = require('xml2js').parseString;
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

//XML To JSON
//==============================================================================


//REQUEST
//==============================================================================
var request = require('request');

app.post('/listings', function(request, response) {

  var query = process.argv[2];


  listings.search(query, function(err, xml) {
    if (err)
      throw err;
    listings.disconnect();
	});
  });



app.get('/listings', function(req, response) {
	var url = 'https://www.yougotlistings.com/api/rentals/search.php?key=Z6x3y2AYQIVNjFkJ1C8alfcMGEtzuKpgLHn5vRrT';
	var res = response; 
	console.log(request.body);
	if (req.body.query) {
		url += req.body.query + "&city_neighborhood=" + req.body.city_neighborhood;
	}
	
	request(url, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	   
	    

	    
		parseString(body, function (err, result) {
    	
    	console.log(result.YGLResponse.Listings[0].Listing[4]);
    	console.log(result.YGLResponse.Listings[0].Listing[5]);
    	console.log(result.YGLResponse.Listings[0].Listing[6]);
    	res.render('listings', { listings : result.YGLResponse.Listings[0].Listing});

		});
	  }
	});
 	
});







// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);