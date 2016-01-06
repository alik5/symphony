// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var path = require('path');
var exphbs  = require('express-handlebars');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

var mustacheExpress = require('mustache-express');
var parseString = require('xml2js').parseString;
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));


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



app.get('/hemenway', function(req, response) {
	var url = 'https://www.yougotlistings.com/api/rentals/search.php?key=Z6x3y2AYQIVNjFkJ1C8alfcMGEtzuKpgLHn5vRrT&street_name=hemenway';
	var res = response; 
	console.log(request.body);
	
	request(url, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	   
	    

	    
		parseString(body, function (err, result) {
    	
    	console.log(result.YGLResponse.Listings[0].Listing[6]);


    	res.render('hemenway', { listings : result.YGLResponse.Listings[0].Listing});

		});
	  }
	});
 	
});

app.get('/gainsborough', function(req, response) {
	var url = 'https://www.yougotlistings.com/api/rentals/search.php?key=Z6x3y2AYQIVNjFkJ1C8alfcMGEtzuKpgLHn5vRrT&street_name=gainsborough';
	var res = response; 
	console.log(request.body);
	
	request(url, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	   
	    

	    
		parseString(body, function (err, result) {
    	
    	console.log(result.YGLResponse.Listings[0].Listing[6]);


    	res.render('gainsborough', { listings : result.YGLResponse.Listings[0].Listing});

		});
	  }
	});
 	
});

app.get('/symphony', function(req, response) {
	var url = 'https://www.yougotlistings.com/api/rentals/search.php?key=Z6x3y2AYQIVNjFkJ1C8alfcMGEtzuKpgLHn5vRrT&street_name=symphony';
	var res = response; 
	console.log(request.body);
	
	request(url, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	   
	    

	    
		parseString(body, function (err, result) {
    	
    	console.log(result.YGLResponse.Listings[0].Listing[6]);


    	res.render('symphony', { listings : result.YGLResponse.Listings[0].Listing});

		});
	  }
	});
 	
});

app.get('/stephen', function(req, response) {
	var url = 'https://www.yougotlistings.com/api/rentals/search.php?key=Z6x3y2AYQIVNjFkJ1C8alfcMGEtzuKpgLHn5vRrT&street_name=stephen';
	var res = response; 
	console.log(request.body);
	
	request(url, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	   
	    

	    
		parseString(body, function (err, result) {
    	
    	console.log(result.YGLResponse.Listings[0].Listing[6]);


    	res.render('stephen', { listings : result.YGLResponse.Listings[0].Listing});

		});
	  }
	});
 	
});






// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);