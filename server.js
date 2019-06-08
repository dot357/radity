const express = require('express');
const app = express();
var server = require('http').createServer(app);
const port = 3001;



var path = require('path'); // bu pathi tanımlıyor
app.use(express.static(path.join(__dirname, 'public')));  // public dosya kullandırmak için

//app.get('/', (req, res) => res.send(index.html))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// ana sayfayı sunmak için
app.get('/', function(req, res){

    res.sendFile(__dirname + '/index.html');
    //res.sendFile(__dirname + '/landing.html');
    

});