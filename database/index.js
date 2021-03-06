const mongoose = require('mongoose');
const restaurants = require('./restaurants.json');
require('dotenv').config();
const mongoUri = process.env.MONGO_URI;
const option = { restaurantName: 'Kome', user: 'David Guenther'};

// mongoose.connect(`mongodb://localhost/Restaurants`, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(`${mongoUri}`, { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const restaurantSchema = mongoose.Schema({
    name: String,
    img: String,
    cuisine: String,
    type: String,
    stars: Number,
    phone: String,
    address: String,
    website: String,
    link: String,
    hoursOfOperation: [String],
    description: String
})

const requestSchema = mongoose.Schema({
    name: String,
    restaurant: String,
    location: String,
    interests: String
})

let Restaurants = mongoose.model('Restaurants', restaurantSchema);
let Request = mongoose.model('Request', requestSchema);

const seedDatabase = (data) => {
    Restaurants.insertMany(data, (err) => {
        if (err) {
            console.log('insertion error', err);
        } else {
            console.log('data inserted properly into database');
        }
    })
}

const createRequest = ( {review}, cb ) => {
    // console.log('db review entry', review);
    Request.create(review, (err, reviews) => {
        if (err) {
            console.log('req err', err);
        } else {
            console.log('req success');
            cb(null, reviews);
        }
    });
}

const getReviews = ( obj, cb ) => {
    Request.find(obj, (err, reviews) => {
        if (err) {
            console.log('error reading reviews', err);
        } else {
            cb(null, reviews);
        }
    })
}

const getReview = ( { restaurant }, cb ) => {
    const regex = new RegExp(["^", restaurant, "$"].join(""), "i");
    Request.find( {restaurant: regex }, (err, review) => {
        if (err) {
            console.log(err);
        } else {
            cb(null, review);
        }
    })
}

const getRestaurants = (obj, cb) => {
    Restaurants.find(obj, (err, restaurants) => {
        if (err) {
            console.log('error reading db', err);
        } else {
            cb(null, restaurants);
        }
    })
}

const getCuisine = ({cuisine}, cb) => {
    // console.log('database cuisine', obj.cuisine)
    Restaurants.find({cuisine: cuisine}, (err, restaurants) => {
        if(err) {
            console.log('error finding cuisine', err);
            } else {
                cb(null, restaurants);
        }
    })
}

const searchRestaurants = ({ name }, cb) => {
    const regex = new RegExp(["^.*", name, ".*$"].join(""), "i");
    // console.log(regex);
    Restaurants.find({ name: regex }, (err, restaurant) => {
        if(err) {
            console.log('error finding restaurant', err);
        } else {
            cb(null, restaurant);
        }
    })
}


// seedDatabase(restaurants);

module.exports = { getRestaurants, getCuisine, searchRestaurants, createRequest, getReviews, getReview };