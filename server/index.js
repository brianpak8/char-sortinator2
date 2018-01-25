const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5186;
const {sortinate} = require('./logic.js');
// const routes = require('./routes.js');

app.use(express.static(`${__dirname}/../client/`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/sort', (req, res) => {
  console.log(req);
  console.log('req.body.string', req.body.string);
  res.end(sortinate(req.body.string));
})

app.listen(port, () => {console.log('listening on port ' + port)});


module.exports.app = app;
