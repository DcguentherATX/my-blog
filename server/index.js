const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('public'));

app.get('/images', (req, res) => {
    
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

app.listen(port, () => console.log(`App listening on port ${port}!`))