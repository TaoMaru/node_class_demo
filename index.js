var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var axios = require('axios').default;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use('/static', express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function( req, res ){
    axios.get('https://xkcd.com/info.0.json').then(function(response){
        res.render('home.ejs', {name: null, "xkcdData": response.data});
    })
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

app.post("/create", (req, res) => {
    console.log(req.body)
    res.redirect('/')
});

app.listen(3000, () => {
    console.log('started on port 3000');
});