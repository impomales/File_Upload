var express = require('express')
var app = express()
var multer = require('multer')
var upload = multer({dest: 'uploads/'})



app.get('/', function(req, res) {
    res.send('hello world...')
})

var server = app.listen(process.env.PORT || 8080, function() {
    console.log('App is listening on port ' + server.address().port)
})