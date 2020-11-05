const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello this is NUS ISS DevOps </h1>
    <p>Welcome to this course ! version 3</p>
  `);
});

app.get('/error', (req, res) => {
  process.exit(1);
});

app.listen(8080);
