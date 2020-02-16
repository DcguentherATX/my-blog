const mongoose = require('mongoose');
const restaurants = require('./restaurants.json');

mongoose.connect(`mongodb://localhost/Restaurants`, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const restuarantSchema = mongoose.Schema({
    name: String,
    img: String,
    cuisine: String,
    stars: Number,
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

seedDatabase(restaurants);

module.exports = { seedDatabase };