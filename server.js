//Install express server
const express = require('express');
const path = require('path');
var cors = require('cors');

const app = express();

app.use(cors());

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/final-year-project-angular-mvp'));

app.get('/hi', function (req, res) {
    res.send('Hi, you have reached /hi');
})

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/final-year-project-angular-mvp/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4000);