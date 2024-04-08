
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes/routes')

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public" )));
app.use(routes);

app.listen(port, () => {
  console.log(`Listening port ${port}`);
});
