var express = require('express');
var os = require("os");
// Constants
const PORT = 8080;
var healthy=true;
// App
const app = express();

app.get('/', function (req, res) {
  res.send('Hello OpenShift Container Platform!! <br><br>Application version: <b>1a From WebHook</b> <br>Hostname: <b>' + os.hostname() + '\n</b>');
});

app.get('/healthz', function (req, res) {
  console.log('health enquiry')
  if(healthy)
   res.send('OK');
  else
   res.status(404).send('NOT OK');
});

app.get('/cancer', function (req, res) {
   healthy=false;
   res.send('DONE');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
