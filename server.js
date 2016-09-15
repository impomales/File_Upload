var express = require('express')
var app = express()
var path = require('path')
var multer = require('multer')
var upload = multer({dest: 'uploads/'})

app.use(express.static(path.join(__dirname, '/static')))

app.post('/upload', upload.single('fu'), function(req, res, next) {
    res.json({size: req.file.size})
})

var server = app.listen(process.env.PORT || 8080, function() {
    console.log('App is listening on port ' + server.address().port)
})