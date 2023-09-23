var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var axios = require('axios').default;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use('/static', express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    axios.get('https://api.nasa.gov/planetary/apod',{
        params: {
            "api_key": "V6c5pm6c6Z9BecTGTaRangJbafg95NP2Oy75ieAE"
        }
    }).then(function(response){
        res.render('home.ejs', {"nasaData": response.data})
    })
})

app.listen(3000, () => {
    console.log('started on port 3000');
});