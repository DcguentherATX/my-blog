const mongoose = require('mongoose');
const restaurants = require('./restaurants.json');

mongoose.connect(`mongodb://localhost/Restaurants`, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const restuarantSchema = mongoose.Schema({
    name: String,
    img: String,
    cuisine: String,
    type: String,
    stars: Number,
    phone: String,
    address: String,
    website: String,
    hoursOfOperation: [String],
    description: String
})

let Restaurants = mongoose.model('Restaurants', restuarantSchema);

const seedDatabase = (data) => {
    Restaurants.insertMany(data, (err) => {
        if (err) {
            console.log('insertion error', err);
        } else {
            console.log('data inserted properly into database');
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

// seedDatabase(restaurants);

module.exports = { getRestaurants, getCuisine };