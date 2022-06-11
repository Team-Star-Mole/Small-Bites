const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const pool = require('./db.js'); // connect to database
const PORT = 5000;

app.use(cors());
app.use(express.json()); // this gives us access to req.body and then we can get json data
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.resolve(__dirname, '../client')));


// Testing localhost:5000/tom
app.get('/tom', (req, res) => {
  res.status(200).send('hey its the server')
})



app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

  
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;