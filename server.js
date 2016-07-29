var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require('./config.json')
var profileCtrl = require('./controllers/profileCtrl');
var userCtrl = require('./controllers/userCtrl');
var port = 3000;


var app = express();

var corsOptions = {
    origin: 'http://localhost:' + port
};

app.use(bodyParser.json);
app.use(cors(corsOptions));
app.use(session({secret: config.sessionSecret}));
app.use(express.static(__dirname + '/public'));



app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriends);






app.listen(port, function() {
  console.log('listening on: ', port);
});
