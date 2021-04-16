let express = require('express');
let app = express();

app.use(express.json());

// WILL ONLY GET/POST/PUT BACK THE FIRST PROTOCOL IN JS FILE.
app.get('/test', function(req, res){
    console.log(req.body);
    res.send('Test GET Endpoint Success');
})

app.get('/home', (req, res) => {
    console.log(__dirname);
    // this will send back a file in the current directory (__dirname), followed by the path to the file we want to send.
    res.sendFile(__dirname + '/static.html');
})

// app.get('/test', function(req, res){
//     console.log(req.body);
//     res.send('Test GET #2 Endpoint Success');
// })

app.post('/test', function(req, res){
    console.log(req.body);
    res.send('Test POST Endpoint Success');
})

app.listen(1994, function() {
    console.log('App is listening to port 1994!');
})