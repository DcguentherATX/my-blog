const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('public'));

app.get('/images', (req, res) => {
    const { term } = req.query;
    console.log(term);
    unsplash.search.photos(term)
        .then(toJson(res))
        .then(console.log(res));
})

app.listen(port, () => console.log(`App listening on port ${port}!`))