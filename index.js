var express = require('express');
var app = express();

app.use('/static', express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function( req, res ){
    res.render('home.ejs', {name: null});
});

app.get('/path/:name', function( req, res ){
    let name = req.params.name;
    res.render('home.ejs', {name: name});
});

app.get('/query', function( req, res ){
    let name = req.query.name;
    let nameObj = {"name": name}
    res.render('home.ejs', nameObj);
});

app.listen(3000, () => {
    console.log('started on port 3000');
});