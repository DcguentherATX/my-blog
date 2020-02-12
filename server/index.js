const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
const clientId = '';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('public'));


app.get('/images', (req, res) => {
    const { term } = req.query;

    request({url: `https://api.unsplash.com/search/photos?page=1&query=${term}&client_id=${clientId}`}, (err, response) => {
        if (err) {
            console.log(err);
        } else {
            const search = JSON.parse(response.body);
            let photoDetails = [];

            for (let i = 0; i < search.results.length; i++) {
                let currentPhoto = {};

                currentPhoto.id = search.results[i].id;
                currentPhoto.alt = search.results[i].alt_description;
                currentPhoto.image = search.results[i].urls.small;
                currentPhoto.link = search.results[i].links.html;
                currentPhoto.likes = search.results[i].likes;
                currentPhoto.photographer = search.results[i].user.name;

                photoDetails.push(currentPhoto);
            }
            res.send(photoDetails);
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