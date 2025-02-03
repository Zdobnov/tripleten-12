const express = require('express');

const { PORT = 3001 } = process.env;
const routes = require('./routes');

const app = express();

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});