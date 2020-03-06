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
});

app.get('/restaurantSearch', (req, res) => {
    const { name } = req.query;
    
    db.searchRestaurants({name: name}, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // console.log('retrieved', data);
            res.send(data);
        }
    })
});

app.post('/review', (req, res) => {
    const { params } = req.body;

    db.createRequest({review: params}, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            console.log('request received');
            res.send(data);
        }
    })
})

app.get('/review', (req, res) => {
    // console.log('review search', req);
    db.getReviews({}, (err, data) => {
        if (err) {
            console.log('error in server for reviews');
            res.end();
        } else {
            // console.log('reviews searched');
            res.send(data)
        }
    })
})

app.get('/reviewOne', (req, res) => {
    const { restaurant } = req.query;

    db.getReview({ restaurant: restaurant }, (err, data) => {
        if (err) {
            console.log('error finding restaurant');
            res.end();
        } else {
            // console.log('MMMMMMM', data);
            res.send(data)
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