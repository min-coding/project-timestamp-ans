// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//If no date provided, generate current date
app.get('/api', function (req, res) {
  let date = new Date();
  const unix = date.getTime();
  const utc = date.toUTCString();
  res.json({ unix, utc });
});

app.get('/api/:date', function (req, res) {
  const paramDate = req.params.date;
  let date;

  // check type of param (unix/utc) number string multiplied by 1 gives number, string gives NaN
  const checkUnix = paramDate * 1;

  if (isNaN(checkUnix)) {
    date = new Date(paramDate);
  } else {
    date = new Date(checkUnix);
  }

  /**
   * Even it does the same thing, we can't just parsed paramDate, because if
   * paramDate is string of number (unix) -> new Date() cannot instantiate 
   * Date object from that. Need to turn that into Number first
   */

  //check if valid format
  if (date == 'Invalid Date') {
    res.json({ error: 'Invalid Date' });
  } else {
    // .getTime() return unix . from Date object
    const unix = date.getTime();

    // .toUTCstring() return UTC string from Date object
    const utc = date.toUTCString();
    res.json({ unix, utc });
  }
});
// listen for requests :)
var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
