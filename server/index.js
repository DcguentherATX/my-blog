const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
require('dotenv').config();
const clientId = process.env.UNSPLASH_ACCESS_KEY;
const db = require('../database/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('public'));

// ensures all names are uniformally capitalized

const standardizeName = (name) => {
    const updatedName = name.toLowerCase().split(' ');
    let newName = [];
   
    for (let i = 0; i < updatedName.length; i++) {
        newName.push(updatedName[i][0].toUpperCase() + updatedName[i].slice(1));
    }
    return newName.join(' ');
}

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
                currentPhoto.photographer = standardizeName(search.results[i].user.name);

                photoDetails.push(currentPhoto);
            }
            res.send(photoDetails);
        }
    })
});

app.get('/restaurants', (req, res) => {
    db.getRestaurants({}, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // console.log('retrieved', data);
            res.send(data);
        }
    })
})

app.get('/cuisine', (req, res) => {
    const { cuisine } = req.query;

    db.getCuisine({cuisine: cuisine}, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            console.log('retrieved', data);
            res.send(data);
        }
    })
})

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'), function(err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))