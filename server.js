const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes/index');
require('dotenv').config();
 
const app = express();
const PORT = process.env.PORT || 3001;
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 
// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
 
app.use(routes);
 
db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
// Hm.  So it opens the connection with Mongoose concurrently or dependent on opening Mongoose's connection?

// Note:  Should .env NODE_ENV be set to production?  Where will the difference be?