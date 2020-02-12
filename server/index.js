const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
const apiurl = 'https://api.unsplash.com/search/photos?page=1&query=mirror&client_id=';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('public'));


app.get('/images', (req, res) => {
    const { term } = req.query;

    request({url:apiurl}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            var search = JSON.parse(data.body);
            console.log(JSON.stringify(search.results));
            res.send(search);
        }
    })
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'), function(err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))