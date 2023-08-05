const express = require('express');
const bodyParser = require('body-parser'); // Parse incoming request bodies in a middleware

//falcon9

const mongomodel=require('./Modelschema/schema');
const Routing = require('./JobControllerjs/Routing');

const app = express();
const port = 4000;

// Parse incoming requests with JSON payloads

//our choise

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import and use the routing module
app.use(Routing);

 Define a default route
app.get('/', (req, res) => {
  res.send('<h3>Welcome to Express.js class</h3>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
