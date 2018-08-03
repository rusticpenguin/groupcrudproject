const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT ? process.env.PORT : 3000;
const data = require('./students.js');


app.get('/', (req, res) => {
  res.send({
    data,
  });
});

app.get('/:id', (req, res) => {
  if (data[req.params.id]) {
    res.send(data[req.params.id]);
    return;
  }


  res.send({
    error: {
      message: 'No record found!',
    },
  });
});

app.use(cors());


app.listen(PORT, () => process.stdout.write(`Listening on port ${PORT}\n`));
