const router = require('express').Router();
const userRoutes = require('./userRoutes');
const noteRoutes = require('./noteRoutes');
 
router.use('/users', userRoutes);
router.use('/notes', noteRoutes);
//there won't be a <h1> stating 404 if nonexistent route called, as in routes/index.js?
 
module.exports = router;