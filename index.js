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

// your first API endpoint...
app.get('/api/:date', function (req, res) {
  const paramDate = req.params.date;

  if (!paramDate instanceof Date) {
    return res.json({ error: 'Invalid Date' });
  }

  //if param date is Not a Number -> it's UTC -> find unix
  else if (isNaN(paramDate)) {
    const date = new Date(paramDate);

    const timeInMillisecond = date.getTime();

    // convert to unix
    const unixTimestamp = Math.floor(timeInMillisecond / 1000);

    return res.json({ unix: unixTimestamp, utc: paramDate });
  }

  //if param date is a number -> it's unix -> find utc
  else if (!isNaN(paramDate)) {
    const milliseconds = Number(paramDate);
    const dateObject = new Date(milliseconds);
    const utcDate = dateObject.toUTCString();
    return res.json({ unix: paramDate, utc: utcDate });
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

// var listener = app.listen(process.env.DEV_PORT, function () {
//   console.log('Your app is listening on port ' + listener.address().port);
// });
