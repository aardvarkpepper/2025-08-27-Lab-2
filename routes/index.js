const router = require('express').Router();
const apiRoutes = require('./api/index');
 
router.use('/api', apiRoutes);
 
router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});
// Triggers on anything not /api, I suppose.

console.log('routes.index.js running');
 
module.exports = router;