var express = require('express')
var app = express()
var path = require('path')
var multer = require('multer')
var upload = multer({dest: 'uploads/'})

app.use(express.static(path.join(__dirname, '/static')))

app.post('/upload', function(req, res) {
    console.log('something something')
})

var server = app.listen(process.env.PORT || 8080, function() {
    console.log('App is listening on port ' + server.address().port)
})